import { FETCH_BUTTON_CLICKED, SELECT_POST } from "./types";

export const fetchPosts = () => {
  return {
    type: FETCH_BUTTON_CLICKED,
    payload: [
      {
        id: 1,
        title: "My first post",
        content:
          "This is the content of my first post. I am excited to share it with you!",
        author: "John Doe",
        date_published: "2022-01-01 12:00:00",
      },
      {
        id: 2,
        title: "My second post",
        content: "This is the content of my second post. I hope you like it!",
        author: "John Doe",
        date_published: "2022-01-02 12:00:00",
      },
      {
        id: 3,
        title: "My third post",
        content: "This is the content of my third post. I am learning a lot!",
        author: "John Doe",
        date_published: "2022-01-03 12:00:00",
      },
      {
        id: 4,
        title: "My fourth post",
        content:
          "This is the content of my fourth post. I am enjoying blogging!",
        author: "John Doe",
        date_published: "2022-01-04 12:00:00",
      },
      {
        id: 5,
        title: "My fifth post",
        content:
          "This is the content of my fifth post. I am getting the hang of it!",
        author: "John Doe",
        date_published: "2022-01-05 12:00:00",
      },
      {
        id: 6,
        title: "My sixth post",
        content: "This is the content of my sixth post. I am having fun!",
        author: "John Doe",
        date_published: "2022-01-06 12:00:00",
      },
      {
        id: 7,
        title: "My seventh post",
        content: "This is the content of my seventh post. I am loving this!",
        author: "John Doe",
        date_published: "2022-01-07 12:00:00",
      },
      {
        id: 8,
        title: "My eighth post",
        content:
          "This is the content of my eighth post. I am excited to see what's next!",
        author: "John Doe",
        date_published: "2022-01-08 12:00:00",
      },
      {
        id: 9,
        title: "My nineth post",
        content:
          "This is the content of my nineth post. I am looking forward to sharing more!",
        author: "John Doe",
        date_published: "2022-01-09 12:00:00",
      },
      {
        id: 10,
        title: "My tenth post",
        content:
          "This is the content of my tenth post. I am grateful for your support!",
        author: "John Doe",
        date_published: "2022-01-10 12:00:00",
      },
    ],
  };
};

export const selectPost = (post) => {
    return {
        type: SELECT_POST,
        payload: post
    }
}
