const users = [
    {
      name: "Brook",
      scores: 75,
      skills: ["HTM", "CSS", "JS"],
      age: 16,
    },
    {
      name: "Alex",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "David",
      scores: 75,
      skills: ["HTM", "CSS"],
      age: 22,
    },
    {
      name: "John",
      scores: 85,
      skills: ["HTM"],
      age: 25,
    },
    {
      name: "Sara",
      scores: 95,
      skills: ["HTM", "CSS", "JS"],
      age: 26,
    },
    {
      name: "Martha",
      scores: 80,
      skills: ["HTM", "CSS", "JS"],
      age: 18,
    },
    {
      name: "Thomas",
      scores: 90,
      skills: ["HTM", "CSS", "JS"],
      age: 20,
    },
  ];
  
  function addUser(usersData) {
    let newUser = {
      name: "Maira",
      scores: 87,
      skills: ["REACTJS", "JS"],
      age: 26,
    };
    let findUser = usersData.some((user) => user.name === newUser.name);
    if (findUser) {
      let message = "User already exist";
      return message;
    } else {
      usersData.push(newUser);
      return usersData;
    }
  }
  
  console.log(addUser(users));