const sectionConfig = [
  { id: "about", label: "About" },
  { id: "philosophy", label: "Engineering Philosophy" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Toolchain & Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" }
];

function createElement(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function createSectionTitle(text) {
  return createElement("h3", "section-title", text);
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) {
    return;
  }

  const getPreferredTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  applyTheme(getPreferredTheme());
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  });
}

function renderSidebar(data) {
  const profileRoot = document.getElementById("profile-header");
  const navRoot = document.getElementById("main-nav");
  const contactRoot = document.getElementById("contact-links");

  if (!profileRoot || !navRoot || !contactRoot) {
    return;
  }

  const fullName = createElement("h1", "profile-name", data.profile.displayName);
  const title = createElement("h2", "profile-title", data.profile.title);
  profileRoot.append(fullName, title);

  const navList = createElement("ul", "nav-list");
  sectionConfig.forEach((section) => {
    const li = createElement("li", "nav-item");
    const link = createElement("a", "nav-link", section.label);
    link.href = `#${section.id}`;
    li.appendChild(link);
    navList.appendChild(li);
  });
  navRoot.appendChild(navList);

  const emailLink = createElement("a", "contact-link", data.profile.email);
  emailLink.href = `mailto:${data.profile.email}`;
  contactRoot.appendChild(emailLink);

  data.profile.socials.forEach((social) => {
    const socialLink = createElement("a", "contact-link", social.text || social.label);
    socialLink.href = social.url;
    socialLink.target = "_blank";
    socialLink.rel = "noopener noreferrer";
    contactRoot.appendChild(socialLink);
  });

  contactRoot.appendChild(createElement("p", "location", data.profile.location));
}

function renderAboutSection(data) {
  const section = createElement("section");
  section.id = "about";
  section.appendChild(createSectionTitle("About"));

  section.appendChild(createElement("p", "body-copy", data.about.intro));
  section.appendChild(createElement("p", "body-copy", data.about.summary));
  section.appendChild(createElement("p", "body-copy body-copy-muted", data.about.focus));

  return section;
}

function renderPhilosophySection(data) {
  const section = createElement("section");
  section.id = "philosophy";
  section.appendChild(createSectionTitle("Engineering Philosophy"));

  const content = createElement("div", "philosophy-content");
  content.appendChild(createElement("p", "body-copy", data.philosophy.lead));

  const list = createElement("ul", "philosophy-list");
  data.philosophy.principles.forEach((principle) => {
    const item = createElement("li", "philosophy-item");
    const strong = createElement("strong", "", `${principle.name}: `);
    item.append(strong, document.createTextNode(principle.description));
    list.appendChild(item);
  });

  content.appendChild(list);
  section.appendChild(content);
  return section;
}

function renderProjectsSection(data) {
  const section = createElement("section");
  section.id = "projects";
  section.appendChild(createSectionTitle("Projects"));

  const grid = createElement("div", "projects-grid");

  data.projects.forEach((project) => {
    const article = createElement("article", "project");

    const header = createElement("header", "project-header");
    header.appendChild(createElement("h4", "project-title", project.name));

    const links = createElement("div", "project-links");
    const source = createElement("a", "project-link", "Source ↗");
    source.href = project.url;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    links.appendChild(source);
    header.appendChild(links);
    article.appendChild(header);

    article.appendChild(createElement("p", "project-role", project.role));
    article.appendChild(createElement("p", "project-overview", project.summary));

    const details = createElement("div", "project-details");
    details.appendChild(createElement("h5", "subheading", "Highlights"));

    const highlightsList = createElement("ul", "details-list");
    project.highlights.forEach((highlight) => {
      highlightsList.appendChild(createElement("li", "details-item", highlight));
    });
    details.appendChild(highlightsList);

    details.appendChild(createElement("h5", "subheading", "Tech Stack"));
    const tags = createElement("div", "tags-wrap");
    project.stack.forEach((stackItem) => {
      tags.appendChild(createElement("span", "tech-stack-inline", stackItem));
    });
    details.appendChild(tags);

    article.appendChild(details);
    grid.appendChild(article);
  });

  section.appendChild(grid);
  return section;
}

function renderSkillsSection(data) {
  const section = createElement("section");
  section.id = "skills";
  section.appendChild(createSectionTitle("Toolchain & Skills"));

  const grid = createElement("div", "skills-grid");
  data.skills.forEach((skillGroup) => {
    const card = createElement("article", "skill-category");
    card.appendChild(createElement("h4", "skill-title", skillGroup.category));

    const list = createElement("ul", "skill-list");
    skillGroup.items.forEach((item) => {
      list.appendChild(createElement("li", "skill-item", item));
    });

    card.appendChild(list);
    grid.appendChild(card);
  });

  section.appendChild(grid);
  return section;
}

function renderTimelineSection({ id, title, items, headingKey, subheadingKey, periodKey, detailsKey }) {
  const section = createElement("section");
  section.id = id;
  section.appendChild(createSectionTitle(title));

  const list = createElement("div", "timeline");
  items.forEach((entry) => {
    const item = createElement("article", "timeline-item");
    const header = createElement("div", "timeline-header");
    header.appendChild(createElement("h4", "timeline-role", entry[headingKey]));

    const meta = createElement("div", "timeline-meta");
    if (entry[subheadingKey]) {
      meta.appendChild(createElement("span", "timeline-company", entry[subheadingKey]));
    }
    if (entry[periodKey]) {
      meta.appendChild(createElement("span", "timeline-date", entry[periodKey]));
    }

    header.appendChild(meta);
    item.appendChild(header);

    if (Array.isArray(entry[detailsKey]) && entry[detailsKey].length > 0) {
      const detailsList = createElement("ul", "timeline-details");
      entry[detailsKey].forEach((detail) => {
        detailsList.appendChild(createElement("li", "timeline-detail", detail));
      });
      item.appendChild(detailsList);
    }

    list.appendChild(item);
  });

  section.appendChild(list);
  return section;
}

function renderPortfolio(data) {
  const root = document.getElementById("content-root");
  if (!root || !data) {
    return;
  }

  root.appendChild(renderAboutSection(data));
  root.appendChild(renderPhilosophySection(data));
  root.appendChild(renderProjectsSection(data));
  root.appendChild(renderSkillsSection(data));
  root.appendChild(
    renderTimelineSection({
      id: "experience",
      title: "Experience",
      items: data.experience,
      headingKey: "role",
      subheadingKey: "company",
      periodKey: "period",
      detailsKey: "details"
    })
  );
  root.appendChild(
    renderTimelineSection({
      id: "education",
      title: "Education",
      items: data.education,
      headingKey: "degree",
      subheadingKey: "institution",
      periodKey: "period",
      detailsKey: "details"
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderSidebar(portfolioData);
  renderPortfolio(portfolioData);
  setupThemeToggle();
});
