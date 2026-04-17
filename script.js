// Navigation Functions
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToAbout() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}

// Project Content Database
const projectDetails = {
  samurai: {
    title: "Samurai Training Game",
    description: `
      <h3>Project Overview</h3>
      <p>Samurpi is an interactive sword-training system that uses IMU sensing and real-time haptic feedback to teach proper technique. An IMU embedded in a custom wristband tracks motion, while distributed vibration motors in the handle provide intuitive feedback. We created this to explore how sensing and haptics can make learning complex physical skills more effective.</p>
      
      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Sensor Fusion:</strong> Utilized a complementary filter on an RP2040 to synthesize MPU-6050 gyro and accelerometer data for stable state estimation.</li>
        <li><strong>Haptic Reward System:</strong> Designed a proportional controller that provides vibration as a "reward" function to establish good motor habits.</li>
        <li><strong>Fault Recovery:</strong> Developed a custom FDIR (Fault Detection, Isolation, and Recovery) protocol to handle I2C bus hangs caused by haptic motor noise.</li>
        <li><strong>Graphics:</strong> Integrated DMA-driven VGA graphics for high-performance visual feedback during fast-paced gameplay.</li>
      </ul>
    `,
    image: "swordinhand.jpg"
  },
  lwa: {
    title: "Leaky-Wave Antenna (2-4 GHz)",
    description: `
      <h3>Project Overview</h3>
      <p>This project involved the design and simulation of a frequency-scanning Leaky-Wave Antenna (LWA) based on Composite Right/Left-Handed (CRLH) metamaterial structures. Unlike traditional antennas, this design leverages a balanced CRLH unit cell to allow for continuous beam steering—from full-backfire through broadside to endfire—as the frequency sweeps from 2 GHz to 4 GHz.</p>
      
      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Unit Cell Design:</strong> Engineered a balanced CRLH transmission line centered at 3 GHz with 50 Ω Bloch impedance.</li>
        <li><strong>Microstrip Conversion:</strong> Realized physical microstrip components including an Interdigitated Capacitor (IDC) for series capacitance and a Short-Circuited Shunt Stub.</li>
        <li><strong>Optimization:</strong> Used LineCalc and iterative S-parameter matching to fine-tune dimensions and compensate for high-frequency parasitics.</li>
        <li><strong>EM Simulation:</strong> Conducted full-wave EM layout simulations in Keysight ADS to analyze substrate losses and mutual coupling.</li>
      </ul>

      <h3>Key Results</h3>
      <ul class="modal-list">
        <li><strong>Beam Steering:</strong> Successfully demonstrated continuous steering capability from -90° to 90°.</li>
        <li><strong>Efficiency:</strong> Determined that a 3-unit-cell cascade provided the optimal balance between bandwidth (0.458 GHz) and radiation efficiency (up to 14.2%).</li>
      </ul>
    `,
    image: "leakywaveantenna.png"
  },
  optics: {
    title: "Wave Optics for Plasma Diagnostics",
    description: `
      <h3>Project Overview</h3>
      <p>High-Energy-Density (HED) plasmas are notoriously difficult to diagnose because variations in plasma density and magnetic fields deflect probing lasers in complex ways. This project validates a full wave-optics framework to provide more accurate measurements for the PUFFIN HED facility at Cornell.</p>
      
      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Computational Modeling:</strong> Utilizing the Chromatix wave-optics package to simulate laser propagation, capturing wave phenomena such as coherence, interference, and diffraction.</li>
        <li><strong>Experimental Validation:</strong> Conducting controlled experiments using a pulsed Nd:YAG laser system at 355 nm, 532 nm, and 1064 nm to probe surrogate plasmas.</li>
        <li><strong>Optical Alignment:</strong> Setting up and aligning a multi-wavelength optical diagnostic system to capture high-resolution imagery of refractive-index variations.</li>
        <li><strong>Data Synthesis:</strong> Developing workflows to compare experimental imagery with wave-optics simulation outputs to refine physical models.</li>
      </ul>

      <h3>Research Impact</h3>
      <ul class="modal-list">
        <li><strong>Diagnostic Accuracy:</strong> Enables precise interpretation of experimental data critical for fusion energy research.</li>
        <li><strong>System Design:</strong> Provides a validated simulation framework for designing next-generation diagnostics for the PUFFIN facility.</li>
        <li><strong>Cross-Disciplinary Skills:</strong> Combines computational physics with hands-on experimental laser safety and optical engineering.</li>
      </ul>
    `,
    image: "optics.png"
  },
  park: {
    title: "Grietzer Memorial Park Redesign",
    description: `
      <h3>Project Overview</h3>
      <p>A multi-disciplinary municipal park redesign in Johnson City, NY. The project revitalizes a 5.58-acre site (a former industrial landfill) into a recreational gateway, improving connectivity for the regional community and the future Vestal Rail Trail.</p>
      
      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>ADA Accessibility:</strong> Designed a 2,370-foot accessible pathway network and inclusive playground expansions.</li>
        <li><strong>Flood Resiliency:</strong> Integrated green infrastructure including five dedicated rain gardens to manage site runoff and preserve the riparian buffer.</li>
        <li><strong>Community Engagement:</strong> Facilitated public workshops and stakeholder outreach to ensure the design reflected local needs and historic context.</li>
        <li><strong>Implementation:</strong> Drafted site plans and cost estimates used to secure funding via the NYS Consolidated Funding Application (CFA).</li>
      </ul>
    `,
    image: "dcplan.jpg"
  }
};

// Modal Functions
function openProject(projectId) {
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");
  const data = projectDetails[projectId];

  if (data) {
    body.innerHTML = `
      <img src="${data.image}" style="width:100%; border-radius:12px; margin-bottom:20px;">
      <h2 style="font-size:2.5rem; margin-bottom:15px; color:#5A4636;">${data.title}</h2>
      <div style="font-size:1.1rem; line-height:1.6; color:#6b5b4d;">${data.description}</div>
    `;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable background scroll
  }
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable background scroll
}

// Close if clicking outside the modal box
window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target == modal) {
    closeModal();
  }
}

// Scroll animation for 'About' section
function revealAbout() {
  const about = document.getElementById("about");
  if (about) {
    const rect = about.getBoundingClientRect();
    if (rect.top < window.innerHeight - 150) {
      about.classList.add("show");
    }
  }
}

window.addEventListener("scroll", revealAbout);