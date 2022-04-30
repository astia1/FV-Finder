import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl:
      "https://mckinneyphoto.com/wp-content/uploads/2022/04/Cheramoya.jpg",
    user: USERS[0].user,
    likes: 24,
    date: "05/01/ 2022",
    time: "9:41 AM",
    caption: "Awesome Cherimoya at Edmonds PCC y’all",
    location: "PCC, Edmonds",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "Fancy",
        comment: "Thanks, I love it!",
        date: "05/01/ 2022",
        time: "10:18 AM",
      },
    ],
  },
  {
    imageUrl:
      "https://mckinneyphoto.com/wp-content/uploads/2022/04/Jack-sq.jpg",
    user: USERS[1].user,
    likes: 311,
    date: "04/30/2022",
    time: "7:23 PM",
    caption:
      "Great Jackfruit at Ranch99. We just ate the first half and it wa so good!",
    location: "Ranch 99, Edmonds",
    profile_picture: USERS[1].image,
    comments: [
      {
        user: "Trung",
        comment: "Yum",
        date: "04/30/2022",
        time: "7:25 PM",
      },
      {
        user: "JJ",
        comment: "Looks good, but how much was it?",
        date: "04/30/2022",
        time: "7:51 PM",
      },
    ],
  },
];
