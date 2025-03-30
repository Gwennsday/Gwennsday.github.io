import conn from "@api/axios";

const baseURL =
  "https://twitchapi.teklynk.com/getuserclips.php?channel=gwennsday&prefer_featured=true";

const get = async () => {
  const res = await conn.get(`${baseURL}`);
  const clips = res.data.data.map((clip) => {
    console.log(clip);
    const { title, clip_url, is_featured, thumbnail_url } = clip;
    return {
      title,
      videoSrc: clip_url,
      featured: is_featured,
      poster: thumbnail_url,
    };
  });
  return clips;
};

export { get };
