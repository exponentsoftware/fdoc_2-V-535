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
      let newSkill = "JQ";
      let userSkills = findUser.skills.some((skill) => skill === newSkill);
      if (!userSkills) {
        findUser.skills.push(newSkill);
        return findUser;
      } else {
        return "User already have this skill.";
      }
      //return only find user data with added skills
    } else {
      let message = "User Not Found";
      return message;
    }
    //return all user data
    //   return usersData;
  }
  console.log(addUser(users));