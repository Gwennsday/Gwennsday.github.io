import conn from "./axios";

const baseURL =
  "https://twitchapi.teklynk.com/getuserclips.php?channel=gwennsday&prefer_featured=true";

const getClips = async () => {
  const res = await conn.get(`${baseURL}`);
  const clips = res.data.data.map((clip) => {
    const { title, clip_url, is_featured } = clip;
    return {
      description: title,
      videoSrc: clip_url,
      featured: is_featured,
    };
  });
  return clips;
};

export { getClips };
