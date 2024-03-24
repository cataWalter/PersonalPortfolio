const technologies = [
  { imgSrc: "assets/Icons/c-.png", description: "C++" },
  {
    imgSrc: "assets/Icons/erlang_plain_logo_icon_146529.png",
    description: "Erlang",
  },
  { imgSrc: "assets/Icons/letter-c.png", description: "C" },
  {
    imgSrc:
      "assets/Icons/png-transparent-dart-logo-programming-language-computer-programming-android-text-logo-computer-programming-thumbnail.png",
    description: "Dart",
  },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
  { imgSrc: "assets/Icons/pngwing.com.png", description: "x86" },
];

const languages = [
  "assets/Languages/download.png",
  "assets/Languages/Flag_of_Italy.svg.png",
  "assets/Languages/united-kingdom.png",
  "assets/Languages/flag (1).png",
  "assets/Languages/flag.png",
  "assets/Languages/france.png",
  "assets/Languages/german.png",
  "assets/Languages/turkey.png",
];

const appendTechnology = (container, imgSrc, description) => {
  const iconDiv = document.createElement("div");
  iconDiv.className = "col";
  iconDiv.innerHTML = `
    <div class="bg-odd-codecyan  rounded-5  align-items-center">
      <div class="text-center">
        <img src="${imgSrc}" alt="" class="w-75 rounded-circle img-fluid service-img-codecyan" />
        <div class="position-absolute top-50 start-50 translate-middle"></div>
      </div>
      <div class="text-center mt-2">${description}</div>
    </div>
  `;
  container.appendChild(iconDiv);
};

const appendLanguage = (container, imgSrc, description) => {
  const iconDiv = document.createElement("div");
  iconDiv.className = "col d-flex justify-content-center align-items-center"; // Added classes for flex layout
  iconDiv.innerHTML = `
    <div class="bg-white rounded-5 p-3"> <!-- Added padding class -->
      <div class="text-center">
        <img src="${imgSrc}" alt="" class="icon img-fluid" /> <!-- Added class for icon styling -->
      </div>
      <div class="text-center mt-2">${description}</div>
    </div>
  `;
  container.appendChild(iconDiv);
};

const container1 = document.getElementById("technology-icons");
const container2 = document.getElementById("language-icons");

technologies.forEach((technology) => {
  appendTechnology(container1, technology.imgSrc, technology.description);
});

languages.forEach((language) => {
  appendLanguage(container2, language, "");
});
