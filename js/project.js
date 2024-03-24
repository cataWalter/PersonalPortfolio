const additionalColors = [
  "bg-danger",
  "bg-green-codecyan",
  "bg-blue-codecyan",
  "bg-yellow-codecyan",
];

function addPortfolioItems() {
  const portfolioContainer = document.querySelector("#portfolio .row");
  if (portfolioContainer) {
    portfolioContainer.innerHTML = `
        ${createPortfolioItem(
          0,
          "Restaurant Management",
          "",
          "Microsoft Access"
        )}
        ${createPortfolioItem(
          1,
          "Investment Analyzer",
          "Statistics evaluator for investments",
          "Python"
        )}
        ${createPortfolioItem(
          2,
          "Social Media Analyzer",
          "Statistics evaluator for Instagram",
          "Python"
        )}
        ${createPortfolioItem(
          3,
          "German Demystifier",
          "Semantics Analysis of German books",
          "Python"
        )}
        ${createPortfolioItem(
          2,
          "NikiTranslator",
          "Translate a sentence into multiple languages",
          "Python"
        )}
        ${createPortfolioItem(
          1,
          "Engineering Toolbox",
          "Extremely powerful and multipurpose calculator for engineering subjects",
          "Python"
        )}
        ${createPortfolioItem(
          0,
          "Skillogue",
          "Social Network for finding people for their passions and skills",
          "Flutter"
        )}
        ${createPortfolioItem(
          1,
          "Query Reverse Engineering",
          "Returns the query that generated a certain result",
          "Python, SQL"
        )}
        ${createPortfolioItem(
          2,
          "Smart bracelets",
          "University project for checking the status of your child with a bracelet",
          "C, Tossim"
        )}
        ${createPortfolioItem(
          3,
          "Train FSM",
          "University project for managing a train station through a FSM",
          "Uppaal"
        )}
        ${createPortfolioItem(
          1,
          "Ecommerce",
          "University project for an Amazon-like ecommerce",
          "Java, Hibernate"
        )}

        `;
  }
}

function createPortfolioItem(color, title, description, technology) {
  return `
    <div class="col">
        <div class="${additionalColors[color]} anim-codecyan rounded-5 overflow-hidden p-5 ">
            <h1 class="fw-bold text-light">${title}</h1>
            <p class="fw-light text-light">${description}</p>
            <p class="fs-4 text-light">${technology}</p>
        </div>
    </div>`;
}

document.addEventListener("DOMContentLoaded", addPortfolioItems);
