import React from "react";

const Group = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .post(`${BASE_URI}/students`, { userGroup })
      .then((res) => {
        setStudents(res.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div></div>;
};

export default Group;
