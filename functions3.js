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
    let name = "Thomas";
    let findUser = usersData.find((user) => user.name === name);
  
    if (findUser) {
      let newAge = 23;
      let newScores = 92;
      let editUser = {
        name: "Thomas",
        scores: newScores,
        skills: ["HTM", "CSS", "JS"],
        age: newAge,
      };
      return editUser;
    } else {
      let message = "User Not Found";
      return message;
    }
  }
  console.log(addUser(users));