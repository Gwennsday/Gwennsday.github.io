import { get } from "@api/clips";
import { useQuery } from "@tanstack/react-query";

const useGetClips = () => {
  const {
    isLoading,
    data = [],
    error,
  } = useQuery({
    queryKey: ["clips"],
    queryFn: async () =>
      await get().catch((e) => {
        console.error(e);
      }),
    retry: false,
    throwOnError: true,
  });
  return { isLoading, data, error };
};

const useClips = { useGetClips };

export default useClips;
