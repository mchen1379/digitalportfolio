// Navigation Functions
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Active navigation indicator
function updateActiveNav() {
  const sections = ['about', 'experience', 'projects', 'contact'];
  const navItems = document.querySelectorAll('.navbar li');

  let current = '';
  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element && element.offsetTop <= window.scrollY + 200) {
      current = section;
    }
  });

  navItems.forEach(item => item.classList.remove('active'));
  if (current) {
    const activeItem = document.querySelector(`.navbar li[onclick="scrollToSection('${current}')"]`);
    if (activeItem) activeItem.classList.add('active');
  }
}

window.addEventListener('scroll', updateActiveNav);

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
      <p>For my senior design project, I collaborated with my friend (Mark Franklin) to develop an interactive sword-training system called Samur-pi. The system used inertial measurement unit (IMU) sensing and real-time haptic feedback to guide users toward proper technique. We designed a custom wristband with an embedded IMU to capture motion data and integrated vibration motors into the sword handle to deliver intuitive, corrective feedback. The project required extensive hardware-software integration, with development primarily in C/C++, and allowed us to apply and extend concepts from ECE4760 (Microcontrollers). We pursued this project to explore how combining motion sensing with haptics can enhance the learning of complex physical skills.</p>
      
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

  maize: {
    title: "MAIZE External Field Reconnection",
    images: [
      "maize2.jpg",
      "sqmaize.jpg",
      "simmaize.jpg"
    ],
    description: `
      <h3>Project Overview</h3>
      <p>During my junior year, I collaborated with two other undergraduate students, Jonathan Lee and David Johnson, to model the plasma formed by parallel exploding wire arrays. Using the three-dimensional magnetohydrodynamic code GORGON, we simulated the full evolution of a pulsed-power experiment conducted on the MAIZE facility at the University of Michigan. These experiments investigated how a plasma expands into a vacuum magnetic field, with cases of 0 T, 0.5 T, and 2 T applied external fields. Over the course of that semester, we worked to understand the underlying physics and validate our simulations against experimental data, which culminated in a paper on "Delayed Current Sheet Formation Due to an External Field in Pulsed-Power-Driven Reconnection Experiments" submitted to the Journal of Plasma Physics.</p>

      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>3D MHD Simulations:</strong> Utilized GORGON to simulate the full evolution of parallel exploding wire array experiments, capturing plasma formation and expansion dynamics across multiple applied magnetic field configurations.</li>
        <li><strong>Data Visualization & Analysis:</strong> Produced visualizations of line-integrated electron density, pressure, and angular momentum, enabling direct comparison with experimental diagnostics and physical interpretation of simulation results.</li>
        <li><strong>Parameter Tuning:</strong> Systematically tuned sensitive simulation parameters to achieve physically meaningful results that aligned with experimental observations, refining our understanding of magnetic reconnection in the presence of external fields.</li>
      </ul>

      <h3>Publication</h3>
      <div style="height: 600px; overflow: hidden; border-radius: 12px; border: 1px solid #e2cdb8; margin-top: 15px;">
        <iframe
          src="https://drive.google.com/file/d/1AMzNr8K76HifQ5YTUCb0nrdZl9773j59/preview"
          style="width: 100%; height: 100%; border: none;"
          allowfullscreen>
        </iframe>
      </div>
    `
  },

  lpf: {
    title: "Maximally Flat Low Pass Filter",
    images: [
      "lowpassfilter.jpg",
      "lowschematic.png"
    ],
    description: `
      <h3>Project Overview</h3>
      <p>For ECE4330 (Microwave Circuit Design), I collaborated with classmates Jodi and Mark to design and fabricate a 3rd order maximally flat microwave low-pass filter using open-circuited shunt stubs on Rogers 6035HTC substrate. The filter was designed to match 50Ω impedance and achieve a maximally flat passband response. The project involved end-to-end design, simulation, fabrication, and measurement validation using both Keysight VNA and NanoVNA equipment.</p>

      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Filter Design:</strong> Designed a 3rd order maximally flat low-pass filter topology using open-circuited shunt stubs with precise impedance matching to 50Ω.</li>
        <li><strong>Circuit Simulation:</strong> Modeled the filter in Keysight PathWave ADS, optimizing component values and geometries to meet frequency and magnitude specifications.</li>
        <li><strong>EM Simulation & Optimization:</strong> Generated PCB layout and performed full-wave electromagnetic simulation in ADS EM simulator, then refined design for parasitic effects and substrate characteristics.</li>
        <li><strong>Fabrication & Measurement:</strong> Fabricated design on Rogers 6035HTC substrate and validated performance using Keysight VNA (1001 points, 1 GHz span) and NanoVNA portable equipment with full calibration protocols.</li>
        <li><strong>Results Analysis:</strong> Compared measured S-parameters (S11, S21) with circuit and EM simulated results, analyzing discrepancies due to fabrication tolerances and connector effects.</li>
      </ul>

      <h3>Lab Report</h3>
      <div style="height: 600px; overflow: hidden; border-radius: 12px; border: 1px solid #e2cdb8; margin-top: 15px;">
        <iframe
          src="https://docs.google.com/document/d/1v_5iBWEfkbipWg79KCJhzKo5uwuNytVz/preview"
          style="width: 100%; height: 100%; border: none;"
          allowfullscreen>
        </iframe>
      </div>
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

  hed: {
    title: "HED Plasma Spectroscopy",
    images: [
      "spectro.jpg"
    ],
    description: `
      <h3>Project Overview</h3>
      <p>When you excite thin wire arrays with intense electrical pulses, you create plasmas that are extremely hot, dense, and threaded with strong magnetic fields. Spectroscopy, the study of how matter absorbs, emits, or scatters light at different wavelengths, provides a powerful way to diagnose these extreme plasmas. Working with my research partner, Nedzma Srkalovic, and under the guidance of Professor Jack Hare, I analyzed time-resolved optical spectra from aluminum plasmas produced in experiments on the Z machine at Sandia National Laboratories. These plasmas reached temperatures exceeding 100,000 K. By analyzing the spectral data, we could gauge the plasma's temperature and density, validate our computer simulations, and deepen our understanding of plasma behavior under extreme conditions, insights that are critical for both astrophysical research and advanced fusion energy concepts.</p>

      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Spectral Modeling:</strong> Used ray-tracing and atomic physics codes to model visible emission spectra from aluminum plasmas, accounting for radiative transfer and atomic processes under extreme conditions.</li>
        <li><strong>Spectral Analysis:</strong> Employed existing analysis codes and atomic models to interpret time-resolved optical spectra obtained from Z machine experiments, extracting plasma diagnostics from experimental data.</li>
        <li><strong>Plasma Characterization:</strong> Compared simulated spectra with experimental results to determine plasma properties including temperature, density, and composition, validating MHD simulations against laboratory observations.</li>
      </ul>

      <h3>Presentation</h3>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px;">
        <iframe
          src="https://docs.google.com/presentation/d/1Agn2yrYZqIPvBumOH536Md-eRgLo7sFiDiB5Igjcj-8/embed?start=false&loop=false"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
          allowfullscreen>
        </iframe>
      </div>
    `
  },

  fcbc: {
    title: "Flying Capacitor Buck Converter",
    images: ["flyingcapbuck.png", "flyingcapoutcomes.png"],
    description: `
      <h3>Project Overview</h3>
      <p>For Advanced Power Electronics (ECE6560), I completed a comprehensive multi-lab project involving the design, simulation, optimization, and control of a three-level flying capacitor buck converter. The work spanned five progressive labs, integrating steady-state analysis, electromagnetic simulation, loss estimation, design optimization, and closed-loop control implementation. The project demonstrated the full power electronics design cycle, from theoretical analysis to practical implementation, using industry-standard tools including MATLAB, PLECS, and LTspice.</p>

      <h3>Technical Implementation</h3>
      <ul class="modal-list">
        <li><strong>Steady-State Analysis (Lab 1):</strong> Generated periodic steady-state waveforms using augmented state-space matrices and validated results against PLECS simulations. Analyzed inductor current, output capacitor voltage, and flying capacitor voltage across multiple operating conditions with different component values and duty ratios.</li>
        <li><strong>Transistor Loss Analysis (Lab 2):</strong> Evaluated power dissipation in EPC2066 GaN transistors using both LTspice SPICE models and analytical loss estimation from MATLAB waveforms. Compared conduction losses, switching losses, and gate drive losses under various operating conditions, including zero-voltage switching (ZVS) analysis.</li>
        <li><strong>Inductor Design Optimization (Lab 3):</strong> Optimized inductor designs across nine ELP+I core combinations using Fourier analysis and magnetic design equations. Evaluated loss-volume trade-offs and identified dominant loss mechanisms (core vs. winding loss) for different converter specifications.</li>
        <li><strong>Full Design-Space Exploration (Lab 4):</strong> Performed multi-dimensional optimization across switching frequency (100 kHz–1 MHz), inductance (0.1–2 μH), and five GaN transistor candidates. Generated Pareto-optimal designs balancing total converter loss and volume, with power density calculations for practical implementation guidance.</li>
        <li><strong>Closed-Loop Control (Lab 5):</strong> Designed proportional-integral (PI) controller for output voltage regulation. Implemented discrete-time control in PLECS, comparing transient response under continuous and discrete control with load step changes.</li>
      </ul>

      <h3>Key Results</h3>
      <ul class="modal-list">
        <li>Generated and validated steady-state waveforms for multiple operating points</li>
        <li>Quantified transistor losses and identified ZVS operating conditions</li>
        <li>Selected optimized inductor design with favorable loss-volume trade-off</li>
        <li>Identified Pareto-optimal converter designs for efficient power delivery</li>
        <li>Demonstrated robust closed-loop control performance with load transients</li>
      </ul>
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

mems: {
  title: "MEMS Gyroscope Optimization",
  images: ["gyroscope.png"],
  description: `
    <h3>Project Overview</h3>
    <p>For this individual MEMS design project, I designed and optimized a single-axis gyroscope to maximize output voltage sensitivity while meeting strict fabrication and performance constraints. The gyroscope leverages the Coriolis force principle to sense rotation: a proof mass is actuated along the drive axis, and the resulting Coriolis-induced displacement along the orthogonal sense axis is measured to determine rotation rate. Using COMSOL finite-element analysis combined with analytical calculations, I tuned structural parameters including spring constants, resonant frequencies, and proof mass geometry to achieve sensitivity exceeding 150 nV/(rad/sec) within a 2 mm × 2 mm footprint.</p>

    <h3>Technical Implementation</h3>
    <ul class="modal-list">
      <li><strong>Design Optimization:</strong> Optimized drive and sense spring constants and resonant frequencies to maximize responsiveness to Coriolis force while maintaining stability and meeting frequency constraints (≥2 kHz minimum resonance).</li>
      <li><strong>COMSOL Simulation:</strong> Performed structural mechanics analysis in COMSOL to model displacement response, validate resonant frequencies, and characterize drive and sense mode behavior across the operating frequency range.</li>
      <li><strong>Coriolis Force Analysis:</strong> Calculated Coriolis force generation and sense-axis displacement as functions of drive velocity and input rotation rate; determined theoretical output voltage sensitivity using transimpedance amplifier gain constraints (≤10 kΩ).</li>
      <li><strong>Transimpedance Amplification:</strong> Designed readout electronics with controlled transimpedance gain to convert sense-mode displacement into measurable voltage output while maintaining noise performance and linearity.</li>
      <li><strong>Performance Characterization:</strong> Computed noise floor, sensitivity, and resolution metrics; validated design against all specifications including maximum drive voltage (1 V), design area (<2 mm²), and output voltage sensitivity (≥150 nV/(rad/sec)).</li>
    </ul>

    <h3>Design Specifications Met</h3>
    <ul class="modal-list">
      <li>Supply Voltage: 10 V</li>
      <li>Maximum Drive Voltage: 1 V</li>
      <li>Minimum Resonant Frequency: ≥2 kHz</li>
      <li>Maximum Transimpedance Gain: ≤10 kΩ</li>
      <li>Minimum Sensitivity: ≥150 nV/(rad/sec)</li>
      <li>Design Area: <2 mm × 2 mm</li>
      <li>Material: Single-crystal silicon, 120 μm device layer</li>
    </ul>
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
    if (projectId === 'mems') {
      body.innerHTML = `
        <div class="modal-grid">
          <div style="border-radius: 12px; border: 1px solid #e2cdb8; overflow: hidden;">
            <iframe
              src="https://drive.google.com/file/d/1cTrEhFRPRWQjSb3GiPhJ2Y7TIIiqWsaA/preview"
              style="width: 100%; height: 600px; border: none;"
              allowfullscreen>
            </iframe>
          </div>
          <div class="modal-text">
            <h2>${data.title}</h2>
            <div class="modal-description">
              ${data.description}
            </div>
          </div>
        </div>
      `;
    } else {
      const imagesClass = (projectId === 'hed' || projectId === 'lpf' || projectId === 'fcbc') ? 'modal-images hed-single-column' : 'modal-images';
      body.innerHTML = `
        <div class="modal-grid">

          <div class="${imagesClass}">
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
    }

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