import { Container } from "@mui/system";
import React, { useState } from "react";
import { Button } from "@mui/material";
import "./styles/counselor.css";

const counselors = [
  {
    id: 1,
    name: "Ethan",
    location: "Costa Rica",
    src: "https://media.licdn.com/dms/image/C5603AQFWzIHj7Ijo2g/profile-displayphoto-shrink_800_800/0/1653944302306?e=1682553600&v=beta&t=4SBjWI3gH5OfT7Sm4-Xe1sWixose0YD9SuFjRZthEgg",
    alt: "Ethan",
    description:
      "Ethan leads science and health focused outdoor activities, bringing careful planning, safety awareness, and clear communication to each camp session.",
  },
  {
    id: 2,
    name: "Gokhan",
    location: "Turkey",
    src: "https://media.licdn.com/dms/image/C4E03AQFOGCpxF3oHVQ/profile-displayphoto-shrink_800_800/0/1656388466701?e=1682553600&v=beta&t=gEWxp-U8xykoEqJZO3JNYvI5wj_G34K4g194pa7zAb8",
    alt: "Gokhan",
    description:
      "Gokhan coordinates group activities with a service first mindset, helping campers feel welcomed, organized, and ready for each scheduled experience.",
  },
  {
    id: 3,
    name: "Brandon",
    location: "California",
    src: "https://media.licdn.com/dms/image/D4D03AQGSMSYQ4Lu5tQ/profile-displayphoto-shrink_400_400/0/1678322930882?e=1683763200&v=beta&t=jY8UNhQ_wFqiP0WrES5HMbhUFaA5GxhxHeC4fmyrBss",
    alt: "Brandon",
    description:
      "Brandon supports high energy activity sessions, team challenges, and safety conscious outdoor programming for campers of different skill levels.",
  },
  {
    id: 4,
    name: "Joana",
    location: "Portugal",
    src: "https://media.licdn.com/dms/image/D5603AQGSRUXV7UZdGg/profile-displayphoto-shrink_400_400/0/1668811669457?e=1682553600&v=beta&t=yY14ue6KYvAKAeHso6C1inNWJHslP7ycuTsMSYPlGdU",
    alt: "Joana",
    description:
      "Joana leads creative workshops and communication focused activities, helping campers collaborate, present ideas, and build confidence in group settings.",
  },
  {
    id: 5,
    name: "Narciso",
    location: "California",
    src: "https://media.licdn.com/dms/image/C4E03AQGcAsIEBI1p-A/profile-displayphoto-shrink_800_800/0/1633318804437?e=1683158400&v=beta&t=HPyKWOm9cX_6EstSwl-p9-Lh_HgSzeu8ADKvMKPOL88",
    alt: "Narciso",
    description:
      "Narciso brings creativity and structure to camp programming, supporting hands on projects, team activities, and camper mentoring.",
  },
  {
    id: 6,
    name: "Tyler",
    location: "Hawaii",
    src: "https://media.licdn.com/dms/image/C5603AQEKdQQmau5JdA/profile-displayphoto-shrink_800_800/0/1576356265621?e=1683158400&v=beta&t=65Z1V-1EP5FpX5tU5MIi36WZpR8wKS6-RRcDdHckUJo",
    alt: "Tyler",
    description:
      "Tyler focuses on outdoor leadership, camper safety, and reflective team exercises that help groups stay engaged throughout the schedule.",
  },
  {
    id: 7,
    name: "Vincent",
    location: "Paris",
    src: "https://media.licdn.com/dms/image/C4E03AQGZBFiotVNghg/profile-displayphoto-shrink_800_800/0/1629661099821?e=1683158400&v=beta&t=-lEX4-NqcPGQ0gczQY-tDYC7Hi0GbowYYx84mpqnnI8",
    alt: "Vincent",
    description:
      "Vincent supports adventure activities and group games with a calm, practical approach to planning, communication, and camper support.",
  },
  {
    id: 8,
    name: "Mike",
    location: "Italy",
    src: "https://media.licdn.com/dms/image/C5603AQE39E8yzjfoqw/profile-displayphoto-shrink_800_800/0/1583525685224?e=1683158400&v=beta&t=TNzbQN_lYaCFZkhMrrmYJrZOHQtxEw-DB__Fc9BQY_U",
    alt: "Mike",
    description:
      "Mike leads creative recreation sessions, helping campers move from activity planning to participation with clear guidance and positive energy.",
  },
  {
    id: 9,
    name: "Michael",
    location: "Washington",
    src: "https://media.licdn.com/dms/image/C5103AQFj5Negw55QIg/profile-displayphoto-shrink_800_800/0/1516339115063?e=1683158400&v=beta&t=W0-ynEMfYDC3ci1PnlGlMO7MdXwNr3aNSUbX1WYfmAQ",
    alt: "Michael",
    description: "Program leader focused on curriculum quality, camper experience, and team coordination.",
  },
];

function CounselorDetail() {
  const [selectedCounselor, setSelectedCounselor] = useState(counselors[0]);

  const handleCounselorChange = (counselorId) => {
    const selectedCounselor = counselors.find(
      (counselor) => counselor.id === counselorId
    );
    setSelectedCounselor(selectedCounselor);
  };

  return (
    <div
      className="p-5 d-flex justify-content-around"
      style={{
        height: "108%",
        width: "100%",
        minHeight: "92.66vh",
        backgroundSize: "cover",
        backgroundImage: `url(https://i.imgur.com/EnSclo4.jpg) `,
      }}
    >
      <Container>
        <h1 className="text-center text-light">Counselors</h1>
        <div className="d-flex">
          <div className="d-flex">
            <div className="card  my-main-card">
              <div className="card-header">
                <h1>{selectedCounselor && selectedCounselor.name}</h1>
                {/* <h5> {selectedCounselor && selectedCounselor.location}</h5> */}
              </div>
              {selectedCounselor && (
                <img
                  className="card-img-top img-fluid"
                  src={selectedCounselor.src}
                  alt={selectedCounselor.name}
                />
              )}
              <div className="card-body">
                <p className="card-text">
                  {selectedCounselor && selectedCounselor.description}
                </p>
              </div>
              <Button variant="contained">Message Counselor</Button>
            </div>
          </div>

          <div className="d-flex row justify-content-end align-items-center">
            {counselors.map((counselor, index) => (
              <div className="card shadow border border-dark my-card mr-3 mb-3" key={index}>
                <img
                  className="card-img-top img-fluid bg-primary"
                  key={counselor.id}
                  src={counselor.src}
                  alt={counselor.alt}
                />
                <div className="card-body">
                  <h5 className="card-title">{counselor.name}</h5>
                  <p className="card-text">{counselor.location}</p>
                </div>
                <div
                  className="card-overlay"
                  onClick={() => handleCounselorChange(counselor.id)}
                >
                  <h5 className="card-title">Fun Facts</h5>
                  <p className="card-text">Click here</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CounselorDetail;
