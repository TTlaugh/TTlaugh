const portfolioData = {
  profile: {
    fullName: "Nguyen Le Tien Trien",
    displayName: "Nguyen Le Tien Trien",
    title: "Backend / Systems Engineer",
    email: "nltt@tuta.io",
    location: "Ho Chi Minh City, VN",
    socials: [
      {
        label: "GitHub",
        url: "https://github.com/ttasc",
        text: "github.com/ttasc"
      }
    ]
  },
  about: {
    intro:
      "Backend Systems Engineer specializing in Linux environments. Currently completing BSc Computer Engineering at Saigon University, with work that bridges low-level system internals and robust network-driven applications.",
    summary:
      "I build software that respects computing resources. Whether writing POSIX-compliant terminal libraries or architecting containerized web backends, the goal is maximum performance with zero bloat.",
    focus:
      "Proactive software engineer specializing in networking, backend infrastructure, and systems programming. I focus on robust low-level tooling and network-driven applications using Linux primitives. Passionate about Unix philosophy, I prioritize simplicity, performance, and long-term maintainability over transient framework trends."
  },
  philosophy: {
    lead:
      "My technical approach is strongly influenced by Unix philosophy and suckless engineering principles:",
    principles: [
      {
        name: "Zero-Dependency Mindset",
        description:
          "Prefer understanding and interacting with kernel APIs and POSIX standards directly rather than relying on bloated abstraction layers."
      },
      {
        name: "Mechanical Sympathy",
        description:
          "Design data structures and algorithms that respect CPU cache locality, memory boundaries, and I/O bottlenecks."
      },
      {
        name: "Fail-Safe Systems",
        description:
          "Production software must handle edge cases gracefully, with strict state management, atomic file operations, and proper signal handling."
      }
    ]
  },
  skills: [
    {
      category: "Languages",
      items: ["Go (Primary)", "C / C++", "Java", "Python", "Bash / Shell", "SQL"]
    },
    {
      category: "Systems & OS",
      items: ["Linux (Debian, RedHat, Arch)", "Proxmox", "Windows Server"]
    },
    {
      category: "Backend & Infrastructure",
      items: ["Docker & Compose", "MySQL / MariaDB", "Apache / NGINX"]
    },
    {
      category: "Domain Expertise",
      items: ["System Administration", "Networking", "Scripting", "Hardware Maintenance"]
    },
    {
      category: "Tooling",
      items: ["Git", "Make", "Vim / Unix Tools"]
    }
  ],
  projects: [
    {
      name: "envycontrol-go",
      url: "https://github.com/ttasc/envycontrol-go",
      role: "Solo Developer",
      stack: ["Go", "Linux SysFS", "Udev", "Hardware Integration", "RTD3"],
      summary:
        "A fail-safe CLI tool for GPU mode switching and power management on Nvidia Optimus Linux laptops, rewritten from Python to Go.",
      highlights: [
        "Rebuilt the tool around strict stateless architecture by probing hardware state directly from /sys/bus/pci/.",
        "Implemented atomic file transactions with automatic rollback to prevent unbootable states.",
        "Engineered signal shielding to protect initramfs generation from interruption.",
        "Distributed a static binary with zero runtime dependencies."
      ]
    },
    {
      name: "ttbox",
      url: "https://github.com/ttasc/ttbox",
      role: "Fork Author (from nyangkosense/tinybox)",
      stack: ["Go", "POSIX APIs", "Concurrency (Mutex)", "Systems Programming"],
      summary:
        "A hyper-minimalist, POSIX-only library for Terminal User Interfaces. These are my improvements:",
      highlights: [
        "Implemented non-blocking I/O with the POSIX self-pipe trick to handle user input and internal signals with zero-latency event handling.",
        "Flattened traditional 2D buffers into a 1D memory layout to improve CPU cache locality and native memory copy performance.",
        "Engineered a 64-bit bit-packing approach to compress cell state (rune, colors, attributes) and speed up diff checks.",
        "Maintained strict thread-safe operations with raw-mode state control."
      ]
    },
    {
      name: "GameForLinux",
      url: "https://github.com/ttasc/gameforlinux",
      role: "Solo Developer",
      stack: ["Go", "POSIX Shell", "Make", "TUI Architecture"],
      summary:
      "A complete ecosystem of 7+ zero-dependency Terminal UI games and a centralized installation hub.",
      highlights: [
        "Developed a diverse suite of terminal-native games, from real-time lightcycle duels to typing survival and classic puzzles.",
        "Built a centralized distribution hub utilizing cross-architecture POSIX-scripts and Makefile for one-click installation across Linux/macOS/BSD.",
        "Ensured highly performant, statically compiled binaries resulting in a bloat-free, 'plug-and-play' user experience."
      ]
    },
    {
      name: "tcoin",
      url: "https://github.com/ttasc/tcoin",
      role: "Technical Writer & Demo Engineer",
      stack: ["Go", "Blockchain", "Cryptography", "P2P"],
      summary:
      "A Vietnamese educational adaptation of the 'Building Blockchain in Go' series, focused on explaining blockchain internals through interactive demos and improved developer experience.",
      highlights: [
        "Researched and summarized the original blockchain architecture and implementation concepts.",
        "Translated and restructured technical content into Vietnamese for accessibility and learning.",
        "Refactored and modernized demo workflows to simplify local setup and experimentation.",
        "Improved project structure, documentation, and step-by-step demo guidance.",
        "Explained core blockchain concepts including Proof-of-Work, UTXO, transactions, and peer-to-peer communication."
      ]
    },
    {
      name: "sgublogsite",
      url: "https://github.com/ttasc/sgublogsite",
      role: "Solo Developer",
      stack: ["Go", "HTMX", "MariaDB", "sqlc", "Docker", "SSR"],
      summary:
        "A full-stack, server-side rendered content management system that avoids heavy SPA frameworks.",
      highlights: [
        "Used sqlc for type-safe code generation from raw SQL queries, avoiding ORM overhead and reflection pitfalls.",
        "Designed layered backend architecture (MVC) and Dockerized deployment pipeline.",
        "Combined SSR with HTMX for lightweight, low-latency dynamic interactions."
      ]
    },
    {
      name: "Quizz",
      url: "https://github.com/ttasc/Quizz",
      role: "Team Leader & Core Backend Engineer",
      stack: ["Java", "TCP Sockets", "JDBC", "Multithreading"],
      summary:
        "A distributed client-server platform for real-time exam administration built on raw Java TCP sockets.",
      highlights: [
        "Architected relational database schema and mapped OOP classes using custom DAO patterns with raw JDBC.",
        "Engineered multithreaded networking layers to support concurrent remote connections.",
        "Implemented strict thread synchronization (locks) to prevent race conditions during simultaneous submissions.",
        "Developed thread-safe broadcasting to push exam payloads to all clients and manage safe socket teardown.",
        "Built service logic for algorithmic question randomization, real-time grading, and timer-driven auto submission."
      ]
    }
  ],
  experience: [
    {
      role: "Intern System Administrator",
      company: "Information Technology Center, Saigon University",
      period: "Oct 2024 - Apr 2025",
      details: [
        "Administered and monitored Debian-based Linux infrastructure supporting academic platforms.",
        "Deployed and maintained V-SAT examination systems and Dockerized web environments.",
        "Developed an internal monitoring web application using Go and HTMX.",
        "Performed system troubleshooting, network configuration, and hosting management with FastPanel."
      ]
    }
  ],
  education: [
    {
      degree: "BSc Computer Engineering",
      institution: "Saigon University (SGU)",
      period: "2022 - Present"
    }
  ]
};
