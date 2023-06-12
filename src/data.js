const colors = [
  "#fcb0f3",
  "#dc94ef",
  "#bc77ec",
  "#9d5be8",
  "#7d3ee4",
  "#5d22e1",
  "#3d05dd"
];

const getRandomColor = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const skillsData = [
  {
    name: "HTML & CSS",
    emoji: "🎨",
    bgColor: getRandomColor(colors)
  },
  {
    name: "JavaScript",
    emoji: "👩🏽‍💻",
    bgColor: getRandomColor(colors)
  },
  {
    name: "Git & Github",
    emoji: "💿",
    bgColor: getRandomColor(colors)
  },
  {
    name: "React",
    emoji: "⚛️",
    bgColor: getRandomColor(colors)
  },
  {
    name: "Tailwind CSS",
    emoji: "💨",
    bgColor: getRandomColor(colors)
  },
  {
    name: "Backend Development",
    emoji: "💻",
    bgColor: getRandomColor(colors)
  }
];
