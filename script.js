// Navigation Functions
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Project Content Database (UNCHANGED TEXT, only added "images")
const projectDetails = {
  samurai: {
    title: "Samurai Training Game",
    images: [
      "swordinhand.jpg",
      "circuit.png",
      "greenPCB.png",
      "fruitanim.gif",
      "samurpiland.png"
    ],
    description: `
      <h3>Project Overview</h3>
      <p>For my senior design project, I collaborated with a fellow electrical engineering student, Mark Franklin, to develop an interactive sword-training system called Samur-pi. The system used inertial measurement unit (IMU) sensing and real-time haptic feedback to guide users toward proper technique. We designed a custom wristband with an embedded IMU to capture motion data and integrated vibration motors into the sword handle to deliver intuitive, corrective feedback. The project required extensive hardware-software integration, with development primarily in C/C++, and allowed us to apply and extend concepts from ECE4760 (Microcontrollers). We pursued this project to explore how combining motion sensing with haptics can enhance the learning of complex physical skills.</p>
      
      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Sensor Fusion:</strong> Utilized a complementary filter on an RP2040 to synthesize MPU-6050 gyro and accelerometer data for stable state estimation.</li>
        <li><strong>Haptic Reward System:</strong> Designed a proportional controller that provides vibration as a "reward" function to establish good motor habits.</li>
        <li><strong>Fault Recovery:</strong> Developed a custom FDIR (Fault Detection, Isolation, and Recovery) protocol to handle I2C bus hangs caused by haptic motor noise.</li>
        <li><strong>Graphics:</strong> Integrated DMA-driven VGA graphics for high-performance visual feedback during fast-paced gameplay.</li>
      </ul>

      <h3>Project Demo</h3>
      <a href="https://www.youtube.com/watch?v=b8QdYoDhTcs" target="_blank" style="display: block; position: relative; border-radius: 12px; overflow: hidden;">
        <img 
          src="https://img.youtube.com/vi/b8QdYoDhTcs/maxresdefault.jpg" 
          style="width: 100%; display: block; border-radius: 12px;"
          alt="Samurai Training Game Video"
        >
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(0,0,0,0.7); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
          <div style="width: 0; height: 0; border-top: 12px solid transparent; border-bottom: 12px solid transparent; border-left: 20px solid white; margin-left: 4px;"></div>
        </div>
      </a>
    `
  },

  lwa: {
    title: "Leaky-Wave Antenna (2-4 GHz)",
    images: [
      "leakywaveantenna.png",
      "antenna3d2.png",
      "antenna3d.png",
      "antennalayout.png",
      "leakywaveantenna2.png"
      
    ],
    description: `
      <h3>Project Overview</h3>
      <p>
        For my final project in ECE4330 (Microwave Circuit Design), I designed and simulated a frequency-scanning leaky-wave antenna (LWA) using a composite right/left-handed (CRLH) metamaterial architecture. 
        Unlike conventional antennas, this approach enabled continuous beam steering (from backfire through broadside to endfire) as the operating frequency was swept from 2 GHz to 4 GHz.
      </p>

      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li>
          <strong>Unit Cell Design:</strong> Developed a balanced CRLH transmission line centered at 3 GHz with a target Bloch impedance of 50 Ω.
        </li>
        <li>
          <strong>Microstrip Realization:</strong> Implemented the design in microstrip form using an interdigitated capacitor (IDC) for series capacitance and a short-circuited shunt stub for shunt inductance.
        </li>
        <li>
          <strong>Optimization:</strong> Used Keysight ADS LineCalc alongside iterative S-parameter tuning to refine dimensions and mitigate high-frequency parasitic effects.
        </li>
        <li>
          <strong>EM Simulation:</strong> Performed full-wave electromagnetic simulations in Keysight ADS to evaluate substrate losses and coupling effects.
        </li>
      </ul>

      <h3>Project Report</h3>
      <div style="height: 400px; overflow: hidden; border-radius: 12px; border: 1px solid #e2cdb8;">
        <iframe
          src="https://docs.google.com/document/d/1wycFE_IYPOIJaALVXw8BQ-A5-CKCLobuSfDWfZzV4yU/preview"
          style="width: 100%; height: 100%; border: none;"
          allowfullscreen>
        </iframe>
      </div>
    `
  },

  optics: {
    title: "Wave Optics and Laser Imaging",
    images: [
      "opticssetup.jpg",
      "laserlight.jpg",
      "normalized.png",
      "candlechrome.png",
      "interference.png"
    ],
    description: `
      <h3>Project Overview</h3>
      <p>High-Energy-Density (HED) plasmas are challenging to diagnose because spatial variations in plasma density and magnetic fields distort probing laser beams in complex ways. During my final semester as an undergraduate researcher in the PUFFIN Lab, I worked under the guidance of Professor Jack Hare and a postdoctoral researcher, Luisa, to design and implement 4f optical systems for laboratory experiments. I used a candle flame as an accessible analog medium to emulate refractive distortions similar to those found in plasma environments. To complement the experimental work, I developed simulation models in Chromatix to replicate the 4f systems and validate the observed optical behavior.</p>
      
      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Computational Modeling:</strong> Utilized the Chromatix wave-optics package to simulate laser propagation, capturing wave phenomena such as coherence, interference, and diffraction.</li>
        <li><strong>Experimental Validation:</strong> Conducted controlled experiments using a laser system at 355 nm, 532 nm, and 1064 nm to probe surrogate plasmas.</li>
        <li><strong>Optical Alignment:</strong> Set up and aligned a multi-wavelength optical diagnostic system to capture high-resolution imagery of refractive-index variations.</li>
        <li><strong>Data Synthesis:</strong> Developed workflows to compare experimental imagery with wave-optics simulation outputs to refine physical models.</li>
      </ul>

      <h3>Project Slides</h3>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
        <iframe
          src="https://docs.google.com/presentation/d/1a7JwErlNMejMO-WXROGzjjyIk3TU34GsDztsBo24TSU/embed?start=false&loop=false"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
          allowfullscreen>
        </iframe>
      </div>
    `
  },

park: {
  title: "Grietzer Memorial Park Redesign",
  images: [
    "dcplan.jpg",
    "featuresmap.png",
    "RegionalAnalysisGIS.jpg",
    "parkimage.JPG",
    "parkimage2.JPG"
  ],
  description: `
    <h3>Project Overview</h3>
    <p>During my junior fall semester, I collaborated with architecture, urban planning, and engineering students to reimagine a 5.58-acre former industrial landfill in Johnson City, NY as a revitalized civic park. The project centered on navigating complex design constraints including accessibility and infrastructure challenges, while conducting community engagement to ensure the design reflected the diverse needs of the surrounding neighborhood. Drawing on each team member's disciplinary expertise, we developed an updated site layout, integrated GIS data, and produced detailed architectural renderings that brought the community's vision for the space to life.</p>
    
    <h3>Technical Implementation</h3>
    <ul class="modal-list">
      <li><strong>ADA Accessibility:</strong> Designed a 2,370-foot accessible pathway network and inclusive playground expansions.</li>
      <li><strong>Flood Resiliency:</strong> Integrated green infrastructure including five dedicated rain gardens to manage site runoff and preserve the riparian buffer.</li>
      <li><strong>Community Engagement:</strong> Facilitated public workshops and stakeholder outreach to ensure the design reflected local needs and historic context.</li>
      <li><strong>Implementation:</strong> Drafted site plans and cost estimates used to secure funding via the NYS Consolidated Funding Application (CFA).</li>
    </ul>

    <h3>Feature in the Local News</h3>
    <a href="https://www.youtube.com/watch?v=GkSBG8J5zag" target="_blank" style="display: block; position: relative; border-radius: 12px; overflow: hidden;">
      <img 
        src="https://img.youtube.com/vi/GkSBG8J5zag/maxresdefault.jpg" 
        style="width: 100%; display: block; border-radius: 12px;"
        alt="Park Redesign Video"
      >
      <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(0,0,0,0.7); border-radius: 50%; display: flex; align-items: center; justify-content: center;">
        <div style="width: 0; height: 0; border-top: 12px solid transparent; border-bottom: 12px solid transparent; border-left: 20px solid white; margin-left: 4px;"></div>
      </div>
    </a>
  `
}
};

// Modal Functions (UPDATED LAYOUT ONLY)
function openProject(projectId) {
  const modal = document.getElementById("projectModal");
  const body = document.getElementById("modalBody");
  const data = projectDetails[projectId];

  if (data) {
    body.innerHTML = `
      <div class="modal-grid">
        
        <div class="modal-images">
          ${data.images.map(img => `<img src="${img}">`).join("")}
        </div>

        <div class="modal-text">
          <h2>${data.title}</h2>
          <div class="modal-description">
            ${data.description}
          </div>
        </div>

      </div>
    `;

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close if clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("projectModal");
  if (event.target === modal) {
    closeModal();
  }
};