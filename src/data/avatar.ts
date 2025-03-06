export const generate = () => {
  const avatars = [
    "https://avatar.iran.liara.run/public/1",
    "https://avatar.iran.liara.run/public/2",
    "https://avatar.iran.liara.run/public/5",
    "https://avatar.iran.liara.run/public/6",
    "https://avatar.iran.liara.run/public/7",
    "https://avatar.iran.liara.run/public/9",
    "https://avatar.iran.liara.run/public/10",
    "https://avatar.iran.liara.run/public/12",
    "https://avatar.iran.liara.run/public/13",
    "https://avatar.iran.liara.run/public/15",
    "https://avatar.iran.liara.run/public/18",
    "https://avatar.iran.liara.run/public/17",
    "https://avatar.iran.liara.run/public/25",
    "https://avatar.iran.liara.run/public/26",
    "https://avatar.iran.liara.run/public/29",
    "https://avatar.iran.liara.run/public/30",
    "https://avatar.iran.liara.run/public/36",
    "https://avatar.iran.liara.run/public/39",
    "https://avatar.iran.liara.run/public/41",
    "https://avatar.iran.liara.run/public/46",
    "https://avatar.iran.liara.run/public/47",
    "https://avatar.iran.liara.run/public/48",
  ];
  const shuf_avatars = avatars.sort(() => (Math.random() > 0.5 ? 2 : -1));
  return shuf_avatars[0];
};
