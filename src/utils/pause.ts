// fetching 의도적으로 늦추는 함수
// loading skeleton 확인을 위한 의도적 지연
export const pause = async (duration: number) => {
  return await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};
