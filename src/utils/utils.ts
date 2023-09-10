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
        $or: Array<{ enroll_type: number; is_free: boolean }>;
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

  if (isFree) {
    filterConditions.$and[1].$or.push({ enroll_type: 0, is_free: true });
  }

  if (isPaid) {
    filterConditions.$and[1].$or.push({ enroll_type: 0, is_free: false });
  }

  const filterConditionsString = encodeURIComponent(
    JSON.stringify(filterConditions),
  );

  return `${baseURL}?filter_conditions=${filterConditionsString}&offset=${offset}&count=${count}`;
};
