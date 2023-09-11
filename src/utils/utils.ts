export const getAPIURL = (
  title: string,
  page: number,
  isFree: boolean,
  isPaid: boolean,
) => {
  const baseURL = 'https://api-rest.elice.io/org/academy/course/list/';
  const offset = (page - 1) * 20;
  const count = 20;

  const filterConditions: {
    $and: [
      { title: string },
      {
        $or?: Array<{ enroll_type: number; is_free: boolean }>;
      },
    ];
  } = {
    $and: [
      { title: `%${title}%` },
      {
        $or: [],
      },
    ],
  };

  if (isFree && isPaid) {
    // 둘 다 선택된 경우 `$or` 조건을 제거
    delete filterConditions.$and[1].$or;
  } else {
    if (isFree) {
      filterConditions.$and[1].$or?.push({ enroll_type: 0, is_free: true });
    }

    if (isPaid) {
      filterConditions.$and[1].$or?.push({ enroll_type: 0, is_free: false });
    }
  }

  const filterConditionsString = encodeURIComponent(
    JSON.stringify(filterConditions),
  );
  return `${baseURL}?filter_conditions=${filterConditionsString}&offset=${offset}&count=${count}`;
};

export function getInitialStateFromQuery(): {
  title: string;
  isFreeSelected: boolean;
  isPaidSelected: boolean;
  currentPage: number;
} {
  const params = new URLSearchParams(window.location.search);
  const prices = params.getAll('price');

  return {
    title: params.get('keyword') || '',
    isFreeSelected: prices.includes('free'),
    isPaidSelected: prices.includes('paid'),
    currentPage: parseInt(params.get('page') || '1', 10),
  };
}
