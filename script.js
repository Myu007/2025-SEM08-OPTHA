const questions = [
  {
    question: "The uvea is the middle layer of the eye. Which one of  the structures includes uvea? ",
    answers: [
      { text: "Choroid", correct: true },
      { text: "Optic nerve ", correct: false },
      { text: "Vitreous", correct: false },
      { text: "Lens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "True regarding lens of eye ",
    answers: [
      { text: "All stated", correct: true },
      { text: "Avascular ", correct: false },
      { text: "Epithelium is single layer ", correct: false },
      { text: "Ectoderm of origin ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Axial length of eye ball is",
    answers: [
      { text: "24mm", correct: true },
      { text: "20mm ", correct: false },
      { text: "16mm ", correct: false },
      { text: "28mm", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The structure with the highest refractive index in the human eye ",
    answers: [
      { text: "Cornea ", correct: true },
      { text: "Lens ", correct: false },
      { text: "Aqueous humor ", correct: false },
      { text: "Vitreous humor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All of the following are true about layers of cornea except",
    answers: [
      { text: "  Type 2 & type 4 type of collagen are present in Descement membrane ", correct: true },
      { text: "Predescement's layer is also known as Dua’s layer", correct: false },
      { text: "Corneal Stroma is the thickest layer of the cornea ", correct: false },
      { text: "Endothelium is responsible for maintaining relatively dehydrated state of cornea", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A female baby was brought to your OPD for a general check-up. On examination, the baby was able to follow the bell of the stethoscope with her eyes when shown in front of her. The probable age of the child would be",
    answers: [
      { text: "3 months ", correct: true },
      { text: "6-8weeks ", correct: false },
      { text: "At birth ", correct: false },
      { text: "5-6 months", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient on anti-epileptic drugs now complains of progressive constriction of visual fields. Patient is on which drug? ",
    answers: [
      { text: "Vigabatrin ", correct: true },
      { text: "Ethosuximide ", correct: false },
      { text: "Phenobarbitone ", correct: false },
      { text: "Levetiracetam", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following factor is not responsible for lens transparency ",
    answers: [
      { text: "  Hydration", correct: true },
      { text: "Antioxidants ", correct: false },
      { text: "Aquaporins ", correct: false },
      { text: "Avascularity ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which is not a clinical feature of right sided VI nerve palsy?",
    answers: [
      { text: "Convergent squint", correct: true },
      { text: "face turn to left", correct: false },
      { text: "inability to abduct right eye", correct: false },
      { text: "Diplopia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 70-year-old patient with a significant past medical history of rheumatoid arthritis, hypertension, and diabetes mellitus presented to the hospital with sudden onset of blurry vision in his left eye three days prior. Ophthalmologic and Neurologic consultations initially revealed visual acuity was 20/40 on right eye; however, on the left eye, there was an apparent left sided visual loss. Patient's intraocular pressure was normal in both eyes, pupils were equally round and reactive to light, and no afferent pupillary defect was observed. Consequently, an initial head MRI with and without contrast was performed, which showed focal areas of restricted diffusion in the right medial temporal lobe, inferior right basal ganglia with possible involvement of the right lateral geniculate nucleus. Which visual field defects are seen in lateral geniculate body lesion?",
    answers: [
      { text: "Keyhole visual field defect ", correct: true },
      { text: "Pie in the floor ", correct: false },
      { text: "Pie in the sky ", correct: false },
      { text: "Homonyms hemianopia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which one is true about accomodative power of lens?",
    answers: [
      { text: "Decrease with age ", correct: true },
      { text: "Lost after glaucoma surgery ", correct: false },
      { text: "6D at 80 years", correct: false },
      { text: "5D at 75 yrs", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is a  common cause of night blindness?",
    answers: [
      { text: "Cataract ", correct: true },
      { text: "Glaucoma ", correct: false },
      { text: "Oguchi disease ", correct: false },
      { text: "Pathological myopia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The eye structures which do not belong to the optical system:",
    answers: [
      { text: "sclera, vascular layer", correct: true },
      { text: "anterior chamber", correct: false },
      { text: "lens", correct: false },
      { text: "vitreous humor", correct: false },
      { text: "cornea", correct: false },
    ],
  },
  {
    question: "Where will be position of the focus of spherical lens +0.5 D:",
    answers: [
      { text: "2.0 m", correct: true },
      { text: "1.0 m", correct: false },
      { text: "1.5 m", correct: false },
      { text: "0.5 m", correct: false },
      { text: "5.0 m", correct: false },
    ],
  },
  {
    question: "Patient has myopia in the vertical meridian, in the horizontal - hypermetropia. What type of astigmatism:",
    answers: [
      { text: "mixed", correct: true },
      { text: "indirect", correct: false },
      { text: "regular", correct: false },
      { text: "simple", correct: false },
      { text: "complicated", correct: false },
    ],
  },
  {
    question: "Patient has in one eye - myopia 3D., in another eye - myopia 6D. What is the condition?",
    answers: [
      { text: "anisometropia", correct: true },
      { text: " anisocoria", correct: false },
      { text: "aniseikonia", correct: false },
      { text: "astigmatism", correct: false },
      { text: "strabismus", correct: false },
    ],
  },
  {
    question: "The physical refraction of the eye defines:",
    answers: [
      { text: "refractive power of all optical media of the eye", correct: true },
      { text: "refractive power of crystalline lens", correct: false },
      { text: "refractive power of the cornea", correct: false },
      { text: "by the position of the main focus in related to the retina", correct: false },
      { text: "refractive power of the lens and cornea", correct: false },
    ],
  },
  {
    question: "Best correction of unilateral aphakia is:",
    answers: [
      { text: "intraocular lens implantation", correct: true },
      { text: "contact lens", correct: false },
      { text: "spectacles", correct: false },
      { text: "none", correct: false },
      { text: "refractive surgery", correct: false },
    ],
  },
  {
    question: "What is the best optical treatment option for correcting irregular astigmatism:",
    answers: [
      { text: "contact lens", correct: true },
      { text: "spectacles", correct: false },
      { text: "intraocular lens", correct: false },
      { text: "polarization lens", correct: false },
      { text: "prism", correct: false },
    ],
  },
  {
    question: "In retinoscopy for distance of 1m the correction factor is -1,0D. What is the correction factor for retinoscopy done at 66cm?",
    answers: [
      { text: " -1,5.", correct: true },
      { text: " -1,0.", correct: false },
      { text: " -0,5.", correct: false },
      { text: " -2,0.", correct: false },
      { text: " -2,5.", correct: false },
    ],
  },
  {
    question: "What glasses is prescribed for 45-year-old patient for near work?",
    answers: [
      { text: "spherical +1.5 D", correct: true },
      { text: "spherical +2.0 D", correct: false },
      { text: "spherical +3,0 D", correct: false },
      { text: "spherical +4,0 D", correct: false },
      { text: "not needed.", correct: false },
    ],
  },
  {
    question: "What glasses for a 55-year-old patient with myopia -1.0D for near work:",
    answers: [
      { text: "spherical +1.5 D", correct: true },
      { text: "spherical +2.5 D", correct: false },
      { text: "spherical +3,0 D", correct: false },
      { text: "spherical +4,0 D", correct: false },
      { text: "not needed.", correct: false },
    ],
  },
  {
    question: "A 30-year-old man has 6\5 vision each eye, unaided. His cycloplegic retinoscopy is +1,0D sphere at 1m distance. His complaints are blurring newsprint at 30 cm, that clears up in about two minutes. The most probably diagnosis:",
    answers: [
      { text: "accommodation inertia", correct: true },
      { text: "presbyopia", correct: false },
      { text: "hyperopia", correct: false },
      { text: "cycloplegia", correct: false },
      { text: "astigmatism", correct: false },
    ],
  },
  {
    question: "Retinoscopy is done for:",
    answers: [
      { text: "refractive power of eye", correct: true },
      { text: "examination optic nerve", correct: false },
      { text: "examination retina", correct: false },
      { text: "axial length of eye", correct: false },
      { text: "to find out the power of IOL", correct: false },
    ],
  },
  {
    question: "Yoke muscle of the right lateral rectus in dextroversion is the",
    answers: [
      { text: " Left medial rectus", correct: true },
      { text: " Left superior oblique", correct: false },
      { text: "Left inferior rectus", correct: false },
      { text: "Left superior rectus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The muscle which makes an angle of about 51° with the optical axis is:",
    answers: [
      { text: "Superior  oblique", correct: true },
      { text: "Superioir rectus", correct: false },
      { text: "Inferioir rectus", correct: false },
      { text: "Lateral rectus", correct: false },
      { text: "medial rectus", correct: false },
    ],
  },
  {
    question: "Which of the following is not true for binocular single vision?Provides  stereoscopic vision",
    answers: [
      { text: "Is present  since birth", correct: true },
      { text: "Provides  stereoscopic vision", correct: false },
      { text: "Is the cause of diplopia in paralytic squint", correct: false },
      { text: "Fusion is its second grade", correct: false },
      { text: " is develops by 2 y.o", correct: false },
    ],
  },
  {
    question: "Treatment of amblyopia in a 3 yr old child is",
    answers: [
      { text: "Occlusion of one eye", correct: true },
      { text: "Orthoptic exercises", correct: false },
      { text: "Prism", correct: false },
      { text: "Surgery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 6 months-old girl with esotropia would be most likely to have?",
    answers: [
      { text: "Alternating fixation", correct: true },
      { text: "Strabismic amblyopia", correct: false },
      { text: "An accommodative component", correct: false },
      { text: "Dissociatived vertical deviation", correct: false },
      { text: "Diplopia", correct: false },
    ],
  },
  {
    question: "an 4 y.o boy has had onset of esotropia within the past years. Which of the following is a true statement about prism adaptation testing in this  child?",
    answers: [
      { text: "in prism adaptation responders, surgery based on the prism-adapted angle of esotropia, significantly improves the motor and sensory out-come", correct: true },
      { text: "any accommodative component to the child's esotropia is ignored in planning the amount of surgery after prism adaptation", correct: false },
      { text: "if this child does not respond to prism adaptation, surgery is unlikely to provide functional improvement", correct: false },
      { text: "in the child is a responder to prism adaptation, a smaller amount of surgery than indicated for initial amount of esotropia will be perfomed", correct: false },
      { text: "in the child does not  responder to prism adaptation, a bigger  amount of surgery than indicated for initial amount of esotropia will be perfomed", correct: false },
    ],
  },
  {
    question: "A 47-year-old woman came to your clinic for her regular eye check-up. On examination of the anterior segment of the eye using slit lamp you can see all the structures except",
    answers: [
      { text: "Vitreous ", correct: true },
      { text: "Posterior chamber ", correct: false },
      { text: "Anterior chamber ", correct: false },
      { text: "Lens", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Anamaloscope is used to detect:",
    answers: [
      { text: "Color blidness", correct: true },
      { text: "Retinopathy", correct: false },
      { text: "Congenital glaucoma", correct: false },
      { text: "Squint", correct: false },
      { text: "glaucoma", correct: false },
    ],
  },
  {
    question: "Snellen\"s chart is used to test:",
    answers: [
      { text: "Vision", correct: true },
      { text: "Refraction", correct: false },
      { text: "Presbyopia", correct: false },
      { text: "Color blidness", correct: false },
      { text: "Sguint", correct: false },
    ],
  },
  {
    question: "A 65 y.o patien with glaucoma in perimetry was found consentric construction about 20 degree and IOP 28 mmHg,Indicate his stage of glaucoma? ",
    answers: [
      { text: "II stage", correct: true },
      { text: "I stage", correct: false },
      { text: "III stage", correct: false },
      { text: "IV stage", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 25 y.o man with acute redness and purulent discharges in both eyes wich of the following diagnostic tests would be most  appropriate?",
    answers: [
      { text: "Slit -lamp examination", correct: true },
      { text: "Ophthalmoscopy", correct: false },
      { text: "Gonioscopy", correct: false },
      { text: "Tonomerty", correct: false },
      { text: "Visual acuity test", correct: false },
    ],
  },
  {
    question: "A 20 y.o man  was  injured   by piece of metall in left  eye, wich of the following diagnostic tests  for localization of  foreign body in the eye would be most  appropriate?",
    answers: [
      { text: "X ray", correct: true },
      { text: "MRI", correct: false },
      { text: "OCT", correct: false },
      { text: "Anamaloscope", correct: false },
      { text: "Pachimetry", correct: false },
    ],
  },
  {
    question: "A 35 y.o man with acute redness,pain,photophobia and decreased visual acuity in both eyes wich of the following diagnostic tests would be most  appropriate?",
    answers: [
      { text: "Slit lamp examination", correct: true },
      { text: "Ophthalmoscopy", correct: false },
      { text: "OCT", correct: false },
      { text: "Refractometry", correct: false },
      { text: "B scan", correct: false },
    ],
  },
  {
    question: "A 62-year-old woman with Keratoconjunctivitis Sicca demonstrates corneal staining more likely in which location? ",
    answers: [
      { text: "Inferior third ", correct: true },
      { text: "Middle third (interpalpebral) ", correct: false },
      { text: "Superior third ", correct: false },
      { text: "Diffuse over entire cornea", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The sclera is thick in all the following conditions except",
    answers: [
      { text: "Buphthalmos", correct: true },
      { text: "Phthisis bulbi", correct: false },
      { text: "Posterior scleritis", correct: false },
      { text: "Nanophthalmos", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Surgically induced necrotizing scleritis (SINS) may occur in all of the following except ",
    answers: [
      { text: "Tarso- frontalis sling surgery", correct: true },
      { text: "Cataract surgery", correct: false },
      { text: "Trabeculectomy", correct: false },
      { text: "Pterygium excision", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A Patient developed acute redness of the eye with mucopurulent discharge and halos. It did not stain with fluorescein. The halos subsided after washing with clean water and the patient responded to five-day course of topical antibiotics. What should be your probable diagnosis? ",
    answers: [
      { text: "Acute bacterial conjunctivitis ", correct: true },
      { text: "Uveitis ", correct: false },
      { text: "Acute allergic conjuctivitis", correct: false },
      { text: "Immature senile cataract", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is characteristic of acute viral conjunctivitis?",
    answers: [
      { text: "Watery discharge predominates", correct: true },
      { text: "Mucopurulent discharge", correct: false },
      { text: "Retinal involvement is most common", correct: false },
      { text: "Antibiotics are the mainstay of treatment", correct: false },
      { text: "Purulent discharge", correct: false },
    ],
  },
  {
    question: "A recurrent bilateral conjunctivitis occurring with the onset of the the spring with the appearance of grass and flower pollen with symptoms of burning, itching and lacrimation with hyperaemia, chemosis and mild papillary reaction of conjunctiva is:",
    answers: [
      { text: "Simple allergic conjunctivitis", correct: true },
      { text: "Hyperacute conjunctivitis", correct: false },
      { text: "Acute bacterial conjunctivitis", correct: false },
      { text: "Adenoviral keratoconjunctivitis", correct: false },
      { text: "Mycotic conjunctivitis", correct: false },
    ],
  },
  {
    question: "A patient with conjunctival infection led to corneal perforation. Swabs showed Gram negative cocci which had translucent colonies and were oxidase positive. What would be the most probable causative organism?",
    answers: [
      { text: "Neisseria gonorrhae", correct: true },
      { text: "Moraxella catarrahalis", correct: false },
      { text: "Pseudomonas aeruginosa", correct: false },
      { text: "Acinobacter actinatus", correct: false },
      { text: "Herpes simplex", correct: false },
    ],
  },
  {
    question: "Drug of choice of trachoma is",
    answers: [
      { text: "Azithromycin", correct: true },
      { text: "Penicillin", correct: false },
      { text: "Tetracycline", correct: false },
      { text: "Chloremphenicol", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The specific topical remedy suggested for angular conjunctivitis is",
    answers: [
      { text: "Zinc oxide", correct: true },
      { text: "Sulphacetamide", correct: false },
      { text: "Dexamethasone", correct: false },
      { text: "Penicillin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "B-scan showing T sign due to fluid accumulation in sub-tenon space is seen in ",
    answers: [
      { text: "Posterior scleritis", correct: true },
      { text: "Optic neuritis", correct: false },
      { text: "Anterior scleritis", correct: false },
      { text: "Endophthalmitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A female patient 33 years old, consulted an ophthalmologist at the place of residence with complaints of pain, purulent discharge of right eye. Slit lamp examination revealed tense and swollen eyelids, purulent discharge copius trickling down the cheek, chemosis of  conjunctiva. Diagnosed with hyperacute conjunctivitis of adult. What treatment is preferable?",
    answers: [
      { text: "cefotaxime 500 mg IV qid", correct: true },
      { text: "2.5% amphotericin solution", correct: false },
      { text: "0.5% artificial tear solution", correct: false },
      { text: "systemic dexamethasone", correct: false },
      { text: "0.3 % fluconazole eye drops", correct: false },
    ],
  },
  {
    question: "Patient M., 25 years old, complains of watering with mild mucoid discharge, photophobia, redness within 5 days. Examination revealed  conjunctival hyperaemia, follicles in the lower fornix, papillary reaction, petechial subconjunctival haemorrhages. Diagnosed with epidemic keratoconjunctivitis. What diagnostic method can be used to clarify the diagnosis?",
    answers: [
      { text: "Polymerase chain reaction (PCR)", correct: true },
      { text: "Immunofluorescence analysis", correct: false },
      { text: "Ultrasound of the eye", correct: false },
      { text: "General blood analysis", correct: false },
      { text: "Orbit x-ray", correct: false },
    ],
  },
  {
    question: "A woman with a newborn consulted an ophthalmologist with complains of redness, purulent discharges and swelling of eyelids. Examination revealed  conjunctival hyperaemia and chemosis, thick purulent discharges, dense swelling of eyelids. From the anamnesis, it was found out that these symptoms appeared on the 5th day after birth. Diagnosed with gonococcal ophthalmia neonatorum. Antenatal measures of gonococcal ophthalmia neonatorum include:",
    answers: [
      { text: "Treatment of mother’s genital infections when suspected.", correct: true },
      { text: "Povidon-iodine 2.5% solution is effective against the common pathogens.", correct: false },
      { text: "The newborn baby's closed lids should bethoroughly cleansed and dried.", correct: false },
      { text: "Fluconazole is prescribed ", correct: false },
      { text: "Use of 1% tetracycline ointment.", correct: false },
    ],
  },
  {
    question: "Patient V., 43 years old, complains of intense itching and burning sensation, watery mucus, stringy discharge, mild photophobia of both eyes withing 2 days. Slit lamp examination revealed oedema of lids, conjunctival hyperaemia and chemosis, mild papillary reaction. Diagnosed with simple allergic conjunctivitis. What sign will help confirm the diagnosis:",
    answers: [
      { text: "Presence of abundant eosinophils in the discharge", correct: true },
      { text: "Сopious mucous discharge", correct: false },
      { text: "Presence of IgG in the discharge", correct: false },
      { text: "Mucopurulent discharges", correct: false },
      { text: "Сrusts on the eyelids", correct: false },
    ],
  },
  {
    question: "Canalicular obstruction can be a side effect of all of the following except",
    answers: [
      { text: "Latanoprost ", correct: true },
      { text: "5-FU", correct: false },
      { text: "Phospholine iodide ", correct: false },
      { text: "Idoxuridine ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is the treatment of choice of a 2-month-old child with C/C of watering and discharge of the eye with normal anterior and posterior chamber findings",
    answers: [
      { text: "Massage over lacrimal sac ", correct: true },
      { text: "Syringing and probing ", correct: false },
      { text: "Balloon catheter dilation ", correct: false },
      { text: "Dacryocystorhinostomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The ciliary staphyloma is due to ",
    answers: [
      { text: "Scleritis", correct: true },
      { text: "Choroiditis", correct: false },
      { text: "Iridocyclitis", correct: false },
      { text: "Myopia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Intermediate uveitis is also called as ",
    answers: [
      { text: "Pars planitis", correct: true },
      { text: "Chorioretinitis", correct: false },
      { text: "endoophtalmitis", correct: false },
      { text: "Panuveitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Sympathetic ophthalmitis is an example of",
    answers: [
      { text: "Bilateral non-suppurative uveitis", correct: true },
      { text: "Bilateral suppurative uveitis", correct: false },
      { text: "Unilateral non-suppurative uveitis", correct: false },
      { text: "Unilateral non-suppurative uveitis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Are not causes of chronic granulomatous uveitis:",
    answers: [
      { text: " Fuchs heterochromic iridocyclitis", correct: true },
      { text: "Tuberculosis", correct: false },
      { text: "Brucellosis", correct: false },
      { text: "Sarcoidosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Uveal effusion syndrome is seen in all except",
    answers: [
      { text: "Myopia", correct: true },
      { text: "Ciliochoroidal detachment", correct: false },
      { text: "Structural defects in sclera", correct: false },
      { text: "Nanophthalmos", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which anti-fungal can be administered intravitreally?",
    answers: [
      { text: "Fluconazole", correct: true },
      { text: "Voriconazole", correct: false },
      { text: "Ketoconazole", correct: false },
      { text: "Clotrimazole", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old woman with a history of HLA-B27-positive spondyloarthritis presents with redness, pain, and decreased vision in her right eye. On examination, there is a large, elevated, yellow-white lesion in the posterior pole with overlying vitritis. What is the most likely diagnosis?",
    answers: [
      { text: "Birdshot chorioretinitis", correct: true },
      { text: " Toxoplasmosis", correct: false },
      { text: "Cytomegalovirus retinitis", correct: false },
      { text: "Syphilitic chorioretinitis", correct: false },
      { text: "Acute retinal necrosis", correct: false },
    ],
  },
  {
    question: "A 30-year-old man presents with a painful red eye and decreased vision in his left eye. On examination, there is severe anterior chamber inflammation with hypopyon and posterior synechiae. There is also a raised, necrotic lesion on the iris. What is the most likely diagnosis",
    answers: [
      { text: "Tuberculous uveitis", correct: true },
      { text: "Acute angle-closure glaucoma", correct: false },
      { text: "Iritis", correct: false },
      { text: "Herpetic uveitis", correct: false },
      { text: "Fungal endophthalmitis", correct: false },
    ],
  },
  {
    question: "A 60-year-old man with a history of rheumatoid arthritis presents with redness, pain, and decreased vision in his right eye. On examination, there is a large, elevated, yellow-white lesion in the posterior pole with overlying vitritis. What is the most likely diagnosis?",
    answers: [
      { text: "Toxoplasmosis", correct: true },
      { text: "Acute retinal necrosis", correct: false },
      { text: "Cytomegalovirus retinitis", correct: false },
      { text: "Syphilitic chorioretinitis", correct: false },
      { text: "Birdshot chorioretinitis", correct: false },
    ],
  },
  {
    question: "Constantly changing refractory error is seen in",
    answers: [
      { text: "Intumescent cataract", correct: true },
      { text: "Diabetic cataract", correct: false },
      { text: "Morgagnian cataract", correct: false },
      { text: "Traumatis cataract", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the gene is most often implicated in congenital cataract and alpha crystallin mutation? ",
    answers: [
      { text: " CRYAA ", correct: true },
      { text: "PAX6 ", correct: false },
      { text: "PITX2 ", correct: false },
      { text: "GLC3A ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Windshield wiper syndrome is seen in ",
    answers: [
      { text: "  Malposition of lens ", correct: true },
      { text: "Posterior capsular opacification ", correct: false },
      { text: "Reaction to lens material ", correct: false },
      { text: "Dislocation of Intra ocular lens ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An infant present with bilateral white pupillary reflex. On slit lamp examination, a zone of opacity is observed around the fetal nucleus with spoke like radial opacities. The most likely diagnosis ",
    answers: [
      { text: "     Lamellar cataract ", correct: true },
      { text: "Nuclear cataract ", correct: false },
      { text: " Blue dot cataract ", correct: false },
      { text: "Posterior polar cataract", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Treatment of choice in aphakia is",
    answers: [
      { text: " Intra - ocular lens ", correct: true },
      { text: "Contact lens", correct: false },
      { text: "Spectacles", correct: false },
      { text: "Epikeratophakia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Field defect not seen in glaucoma is",
    answers: [
      { text: "Temporal field is first to be affected ", correct: true },
      { text: "Paracentral scotomas ", correct: false },
      { text: "Isolated scotoma may develop ", correct: false },
      { text: "Complete barring of blind spot ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A glaucoma patient presents with bulging of cornea. The most likely diagnosis is ",
    answers: [
      { text: "Staphyloma", correct: true },
      { text: "Keratomalacia", correct: false },
      { text: "Keratoconus", correct: false },
      { text: "Granular dystrophy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Secondary glaucoma associated with angle recession is seen in",
    answers: [
      { text: "Concussion injury", correct: true },
      { text: "Radiation injury", correct: false },
      { text: "Perforating injury", correct: false },
      { text: "Chemical injury", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Intractable glaucoma characteristically occurs in which one of the following? ",
    answers: [
      { text: "Diffuse iris melanoma ", correct: true },
      { text: "Anterior iris melanocyte proliferation", correct: false },
      { text: "Posterior uveal melanocyte proliferation ", correct: false },
      { text: "Lens enlargement ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45-year-old female develops pain in the eyes after prone dark room test. Which of the drugs should be avoided? ",
    answers: [
      { text: "Atropine", correct: true },
      { text: "Pilocarpine ", correct: false },
      { text: "Timolol ", correct: false },
      { text: "Acetazolamide  ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old patient came to casualty with acute attack of asthma after starting treatment of glaucoma. The causative drug is ",
    answers: [
      { text: "Timolol", correct: true },
      { text: "Acetazolamide ", correct: false },
      { text: "Clonidine ", correct: false },
      { text: "Betaxolol ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 44-year-old female is diagnosed with open angle glaucoma. The doctor prescribed topical beta blocker therapy to the patient. Which of the following is not a side effect of topical beta blockers ",
    answers: [
      { text: " Heterochromia iridis", correct: true },
      { text: "Asthma ", correct: false },
      { text: "Bradycardia ", correct: false },
      { text: "Hypoglycemia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A35 year old female presents with sudden onset severe pain in the left eye after watching movie. The pain is severe and there is progressive loss of vision. The ophthalmic surgeon notices ciliary congestion and shallow anterior chamber. The pupil is mid dilated and cornea is edematous. The probable diagnosis is",
    answers: [
      { text: "Angle closure glaucoma ", correct: true },
      { text: "CRVO ", correct: false },
      { text: "CRAO ", correct: false },
      { text: "Open angle glaucoma", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 66-year-old male, homeless, was brought to Ophthal OPD. On examination, a dense hemorrhage in the posterior chamber of the right eye was found, involving the visual acuity. The normal anatomical contents of this chamber is/are",
    answers: [
      { text: "Aqueous humour ", correct: true },
      { text: "Retinal vessels ", correct: false },
      { text: "Vitreous humour ", correct: false },
      { text: "All stated", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The most common mechanism of eye injury in sports is",
    answers: [
      { text: "blunt trauma.", correct: true },
      { text: "mild abrasion.", correct: false },
      { text: "radiation injury.", correct: false },
      { text: "serious laceration", correct: false },
      { text: "cornea erosion", correct: false },
    ],
  },
  {
    question: "Which of the following is the only injury for which treatment should be given without first testing visual acuity?",
    answers: [
      { text: "Chemical injury", correct: true },
      { text: "Retinal detachment", correct: false },
      { text: "Angle-closure glaucoma", correct: false },
      { text: "Mechanical globe injury", correct: false },
      { text: "Erosion of cornea", correct: false },
    ],
  },
  {
    question: "An objective examination of a patient has disclosed a symblepharon. According to the words, the patient suffered an eye injury several years ago. This pathology is a complication of what trauma?",
    answers: [
      { text: "Eye and adnexa burns", correct: true },
      { text: "Contusion of the eyeball", correct: false },
      { text: "Penetrating wound", correct: false },
      { text: "Foreign body of the cornea", correct: false },
      { text: "Crushing injury of the eyeball", correct: false },
    ],
  },
  {
    question: "In case of damage to which bone orbital emphysema, occurs?",
    answers: [
      { text: "Ethmoid bone", correct: true },
      { text: "Temporal bone", correct: false },
      { text: " Frontal bone", correct: false },
      { text: "Zygomatic bone", correct: false },
      { text: "Lacrimal bone", correct: false },
    ],
  },
  {
    question: "A 30-year-old patient was admitted to the Department of Neurotraumatology with drooping eyelid of his left eye. According to his words, he got into traffic accident and received hard blow from temporal side of the orbit. Upon examination: complete ptosis, vision is preserved, the eyeball is immobilized, the pupil is dilated, there is no corneal sensitivity. What led to this situation?",
    answers: [
      { text: "Trauma of the sphenoid bone", correct: true },
      { text: "Fracture of the suparior wall of the orbit", correct: false },
      { text: "Fracture of the inferior wall of the orbit", correct: false },
      { text: "Rupture of the superior oblique muscle from the block", correct: false },
      { text: "Fracture of the medial wall of the orbit", correct: false },
    ],
  },
  {
    question: "Which one of the following regarding acute retinal necrosis is not true?",
    answers: [
      { text: " Posterior pole is involved initially with centrifugal spread ", correct: true },
      { text: "It is caused by herpes zoster virus", correct: false },
      { text: "Severe arteritis is common", correct: false },
      { text: "It may lead to retinal detachment", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "False about In Creutzfeldt-Jakob disease (CJD)",
    answers: [
      { text: "The protein content of the cerebrospinal fluid is raised ", correct: true },
      { text: "EEG shows characteristic waveform", correct: false },
      { text: "Death usually occurs within 12 months of onset", correct: false },
      { text: "Cortical blindness is common ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following conditions is  termed as pseudoglioma?",
    answers: [
      { text: "Norrie disease", correct: true },
      { text: "Toxocara infestation", correct: false },
      { text: "Persistent hyperplastic primary vitreous", correct: false },
      { text: "Retinoblastoma", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which type of retinoblastoma causes retinal detachment",
    answers: [
      { text: "Glioma exophytum", correct: true },
      { text: "Glioma endophytum", correct: false },
      { text: "Glioma planum", correct: false },
      { text: "All stated", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old patient of Insulin Dependent Diabetes Mellitus (IDDM) on insulin for the past 10 years complains of gradual progressive, painless loss of vision. What is the  possible diagnosis",
    answers: [
      { text: "Cataract", correct: true },
      { text: "Vitreous haemorrhage", correct: false },
      { text: "Rhegmatogenous retinal detachment", correct: false },
      { text: "Tractional retinal detachment not involving the macula", correct: false },
      { text: "Retinal Detechment", correct: false },
    ],
  },
  {
    question: "An 11-month-old boy was admitted to the hospital with leukocoria in the right eye. On examination  he presented  no vision in the right eye and buphthalmos. USG and MRI of the right eye showed an intraocular tumor presenting calcfification compatible with retinoblastoma. What is the treatment of choice for this patient? ",
    answers: [
      { text: "Enucleation", correct: true },
      { text: "Evisceration", correct: false },
      { text: "Ionization", correct: false },
      { text: "Oxygenation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The most rapid and accurate method to diagnose cytomegalovirus (CMV) retinitis is",
    answers: [
      { text: "Viral nucleic acid detection in intraocular fluid", correct: true },
      { text: "Virus antigen detection in vitreous", correct: false },
      { text: "Virus detection in intraocular fluid", correct: false },
      { text: "Viral antibody detection in blood by ELISA", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The Reese-Ellsworth classification for retinoblastoma is important for ",
    answers: [
      { text: " Assessment of the survival of the eye after local therapy ", correct: true },
      { text: "Management of the complications", correct: false },
      { text: "Management of the tumor", correct: false },
      { text: "Assessment of the survival of the patient after surgery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "According to Reese-Ellsworth classification, multiple tumors of 4-10 DD in size behind the equator belong to ",
    answers: [
      { text: " Group 2", correct: true },
      { text: "Group 3", correct: false },
      { text: "Group 1", correct: false },
      { text: "Group 4", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following regimen is commonly used in the treatment of retinoblastoma?",
    answers: [
      { text: "Vincristine, carboplatin and etoposide", correct: true },
      { text: "Vinblastine, vincristine and etoposide", correct: false },
      { text: "Vinblastine, vincristine and cisplatin", correct: false },
      { text: "Vinblastine, etoposide and bleomycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young patient presents to the ophthalmology clinic with loss of central vision. There is no obvious family history. ERG and EOG were observed to be normal. Which the following is the most likely diagnosis? ",
    answers: [
      { text: "Stangardt's disease", correct: true },
      { text: "Best's vitelliform dystrophy", correct: false },
      { text: "Retinitis pigmentosa ", correct: false },
      { text: "Cone-rod dystrophy", correct: false },
      { text: "central areolar choroidal dystrophy", correct: false },
    ],
  },
  {
    question: "A 26-year-old female presented with a slowly enlarging painless mass in her front neck. This mass had grown over a three-year period. She has the sensation that food is getting stuck in the upper throat, lack of concentration and attentiveness, and easily feel fatigued. Thyroid Ultrasound revealed Graves’ disease. If the patient has eye involvement with the progression of the disease, the first eye muscle to get affected will be",
    answers: [
      { text: "Inferior rectus ", correct: true },
      { text: "Lateral rectus ", correct: false },
      { text: "Medial rectus ", correct: false },
      { text: "Superior rectus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pseudoproptosis is the simulation of abnormal prominence or a true asymmetry that is not associated with displacement of the globe. Which of the following condition is not a cause for this? ",
    answers: [
      { text: "Hypermetropia ", correct: true },
      { text: "Lagophthalmos ", correct: false },
      { text: "Lid retraction ", correct: false },
      { text: "Enophthalmos of fellow eye", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient 29-year-old female with a 19-year history of insulin-dependent diabetes mellitus. Her visual acuity is 20/20 OU. Fundus examination of the right eye reveals the vitreous to be clear. No neovascularization is visible on the disc, but there are numerous microaneurysms, venous beading, and rare cotton-wool spots. Examination of the left fundus also reveals a clear vitreous with no blood present, microhemorragies. DS: Preproliferative diabetic retinopathy. What is the most common cause of visual loss in patients with nonproliferative diabetic retinopathy?  ",
    answers: [
      { text: "Diabetic macular edema", correct: true },
      { text: "Macular pigmentary disturbance", correct: false },
      { text: "Traction retinal detachment", correct: false },
      { text: "Vitreous hemorrage", correct: false },
      { text: "Optic neuritis", correct: false },
    ],
  },
  {
    question: "A 24-year-old man with a 10-year history of insulin-dependent diabetes mellitus presents with a visual acuity of 20/25 OD and 20/200 OS. Ophthalmoscopy OD: macula demonstrates hard exudates, a small area of flat retinal neovascularization is present. The vitreous is clear. OS: diffuse retinal thickening throughout the macula, scattered hard exudates, and blot hemorrhages. Marked neovascularization of the disc, nasal retinal neovascularization with mild vitreous hemorrhage. DS: Proliferative diabetic retinopathy. What is the surgical treatment?",
    answers: [
      { text: "Laser photocoagulation", correct: true },
      { text: "Irodotomy", correct: false },
      { text: "Scleroplasty", correct: false },
      { text: "Laser trabeculoplasty", correct: false },
      { text: "Goniotomy", correct: false },
    ],
  },
  {
    question: "You see a 26-year-old man with a 15-year history of insulin-dependent diabetes mellitus for the first time. His visual acuity is 20/20 OU. Fundus examination of the right eye reveals the vitreous to be clear. No neovascularization is visible on the disc or elsewhere; however, there are numerous microaneurysms, venous beading, and rare cotton-wool spots. Examination of the left fundus also reveals a clear vitreous with no blood present, but there is a frond of elevated neovascularization arising from the disc, and another small patch of neovascularization away from the disc along the inferonasal arcade. Which method of investigation will determine the form of this pathology?",
    answers: [
      { text: "Fluorescence angiography", correct: true },
      { text: "Slit lamp", correct: false },
      { text: "Refractometry", correct: false },
      { text: "Diaphanoscopy", correct: false },
      { text: "Gonioscopy", correct: false },
    ],
  },
  {
    question: "A 48-year-old man with a 15-year history of insulin-dependent diabetes and chronic hypercholesterolemia sought consultation because of blurred vision of several weeks duration. Examination of the eye: VOU - 20/40. Slit-lamp examination showed only trace nuclear lens opacity. Funduscopic examination showed moderate microaneurysms scattered about all quadrants of both eyes. In the right eye, there neovascular changes were seen. In the left eye, in addition to the microaneurysms there was early neovascularization at the disc. Nonsurgical treatment?",
    answers: [
      { text: "Anti-VEGF therapy", correct: true },
      { text: "Antibacterial therapy", correct: false },
      { text: "Increasing insulin dose", correct: false },
      { text: "Decreasing insulin dose", correct: false },
      { text: "Add artificial eye drops", correct: false },
    ],
  },
  {
    question: " A patient 65 year-old with 8 year history of insulin independent diabetes mellitis came to ophthalmologist for a consultation. The ophthalmologist wrote in his report that the fundus of both eyes showed dilated and tortuous veins, microaneurysms, haemorrhages and hard exudates. DS: Nonproliferative diabetic retinopathy. Which method of investigation will determine the form of this pathology?",
    answers: [
      { text: "Fluorescence angiography", correct: true },
      { text: "Slit lamp", correct: false },
      { text: "Refractometry", correct: false },
      { text: "Diaphanoscopy", correct: false },
      { text: "Tonometry", correct: false },
    ],
  },
  {
    question: "A patient with nanophthalmos has persistent appositional-angle closure after a successful iridotomy. Which of the following laser procedures would be an appropriate treatment to attempt to open the angle? ",
    answers: [
      { text: "Laser gonioplasty", correct: true },
      { text: "Cyclophotocoagulation", correct: false },
      { text: "Laser trabeculoplasty", correct: false },
      { text: "Capsulotomy", correct: false },
      { text: "Laser trabeculotomy", correct: false },
    ],
  },
  {
    question: "Which of the following is known as the structure responsible for accommodation? ",
    answers: [
      { text: "Ciliary body", correct: true },
      { text: "Retina ", correct: false },
      { text: "Optic nerve ", correct: false },
      { text: "Sclera ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The neural crest is a highly migratory multi potent cell population that forms at the interface between the neuroepithelium and the prospective epidermis of a developing embryo. Following extensive migration throughout the embryo, NC cells eventually settle to differentiate into multiple cell types. Which of the following is not a neural crest derivative?",
    answers: [
      { text: "Sphincter pupillae", correct: true },
      { text: "Melanocytes ", correct: false },
      { text: "Ciliary ganglion ", correct: false },
      { text: "Ciliary muscle ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "When does the eye morphogenesis start taking place? ",
    answers: [
      { text: "22 days", correct: true },
      { text: "15 days", correct: false },
      { text: "49 days", correct: false },
      { text: "6 months", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Not a feature at birth",
    answers: [
      { text: "Lens is biconcave in shape", correct: true },
      { text: "Corneal diameter is lesser ", correct: false },
      { text: "Myelination of nerve fibres is till lamina cribrosa ", correct: false },
      { text: "Anteroposterior diameter is 17 mm ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Ascorbic acid transport in cornea is mediated by ",
    answers: [
      { text: "  Sodium – potassium pump", correct: true },
      { text: "Carbonic anhydrase pump ", correct: false },
      { text: "Myoinositol pump ", correct: false },
      { text: "Passive diffusion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Fixation of visual reflexes is accomplished by ",
    answers: [
      { text: "6 month ", correct: true },
      { text: "1 year ", correct: false },
      { text: "2 year ", correct: false },
      { text: "3 year ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with homonymous hemianopia is found to have asymmetric optokinetic nystagmus. The location of the lesion is ",
    answers: [
      { text: "Parietal lobe ", correct: true },
      { text: "Occipital lobe ", correct: false },
      { text: "Temporal lobe ", correct: false },
      { text: "Lateral geniculate body", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Bitemporal hemianopcia can be localised to:",
    answers: [
      { text: "Optic chiasm", correct: true },
      { text: "Optic nerve", correct: false },
      { text: "Occipital cortex", correct: false },
      { text: "Parietal lobe", correct: false },
      { text: "Temporal lobe", correct: false },
    ],
  },
  {
    question: ". A 30year old lady presents with sudden severe bilateral loss of vision more so on right side with no perception of light. Rest of the examination including pupillary reflex, fund us and optokinetic nystagmus are normal. She was able to touch tips of her finger with right eye closed but not with left eye closed. Most likely diagnosis? ",
    answers: [
      { text: "Functional visual loss", correct: true },
      { text: "Anterior ischemic optic neuropathy ", correct: false },
      { text: "CMV retinitis ", correct: false },
      { text: "Optic neuritis ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient presents with headache and bitemporal hemianopia with 6/6 vision. This condition is seen with ",
    answers: [
      { text: "Craniopharyngioma ", correct: true },
      { text: "Optic nerve glioma ", correct: false },
      { text: "Posterior cerebral artery occlusion ", correct: false },
      { text: "AION", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Where will be position of the main focus in emmetropic eye: ",
    answers: [
      { text: "on the retina", correct: true },
      { text: "before the retina", correct: false },
      { text: "behind the retina", correct: false },
      { text: "on the lens", correct: false },
      { text: "on the cornea", correct: false },
    ],
  },
  {
    question: "Where will be position of the main focus in hyperopic eye: ",
    answers: [
      { text: "behind the retina", correct: true },
      { text: "before the retina", correct: false },
      { text: "on the retina", correct: false },
      { text: "on the lens", correct: false },
      { text: "on the cornea", correct: false },
    ],
  },
  {
    question: "The greatest refractive power of eye structures is contributed by:",
    answers: [
      { text: "cornea", correct: true },
      { text: "anterior chamber", correct: false },
      { text: "vitreous humor", correct: false },
      { text: "lens", correct: false },
      { text: "aqueous humor", correct: false },
    ],
  },
  {
    question: "What is the reason of presbyopia?",
    answers: [
      { text: "age related decreasing of accommodation due to hardness of crystalline lens ", correct: true },
      { text: "age related relaxation ciliary muscles ", correct: false },
      { text: "age related decreasing function of the retina", correct: false },
      { text: "age related dysfunction of suspensor ligaments", correct: false },
      { text: "opacity of the lens", correct: false },
    ],
  },
  {
    question: "Aniseikonia will be due to ",
    answers: [
      { text: "different size images in the fundus of both eyes ", correct: true },
      { text: "different degrees of refraction in both eyes ", correct: false },
      { text: "is not the same refraction in different meridians of one eye ", correct: false },
      { text: "changing refraction during one of the meridians of eyes ", correct: false },
      { text: "different degrees of refraction in one eye ", correct: false },
    ],
  },
  {
    question: "When a drinking straw is placed in a container of water, it seems to be broken because of:",
    answers: [
      { text: "refraction", correct: true },
      { text: "total internal reflection", correct: false },
      { text: "apparent depth", correct: false },
      { text: "lateral inversion", correct: false },
      { text: "Snell's Law", correct: false },
    ],
  },
  {
    question: "What’s false about accommodation:",
    answers: [
      { text: "range of accommodation is the difference in dioptric power between the eye at rest and the fully accommodated eye", correct: true },
      { text: "the near point of distinct vision refers to clear near vision when maximum accommodation is used.", correct: false },
      { text: "the far point of distinct vision of an emmetropic eye is at infinity ", correct: false },
      { text: "dynamic refraction refers to the dioptric power of the accommodated eye", correct: false },
      { text: "static refraction refers to the dioptric power of a resting eye", correct: false },
    ],
  },
  {
    question: "A 35-year-old man has normal distance vision but complaints of difficulty in near vision. His retinoscopy shows +2.0D sphere. Probably diagnosis?",
    answers: [
      { text: "hypermetropia", correct: true },
      { text: "myopia", correct: false },
      { text: "presbyopia", correct: false },
      { text: "accommodative inertia", correct: false },
      { text: "amblyopia", correct: false },
    ],
  },
  {
    question: "Mydriatic drop to be used in a 5 -year-old child for:",
    answers: [
      { text: "refractometry", correct: true },
      { text: "ophthalmoscopy", correct: false },
      { text: "perimetry", correct: false },
      { text: "visometry", correct: false },
      { text: "tonometry", correct: false },
    ],
  },
  {
    question: "On performing retinoscopy using a plane mirror in patient who has a refractive error of -3.0D sphere with -2,0D cyl at 90° from a distance 1m, the reflex would move:",
    answers: [
      { text: "against the movement in both the axes", correct: true },
      { text: "with the movement in both the axes", correct: false },
      { text: "with the movement in the horizontal axis and against the movement in vertical axis ", correct: false },
      { text: "with the movements in the vertical axis and against the movement in the horizontal axis", correct: false },
      { text: "no movement", correct: false },
    ],
  },
  {
    question: "A 10- years- old girl, visited ophthalmologist with complaints of low vision of left eye. On examination: VOD= 1.0. VOS= 0.08 n/c (noncorrected). Ophthalmoscopy revealed no pathology of fundus. What additional method is needed to clarify the diagnosis? ",
    answers: [
      { text: "refractometry", correct: true },
      { text: "perimetry", correct: false },
      { text: "tonometry", correct: false },
      { text: "campimetry", correct: false },
      { text: "adaptometry", correct: false },
    ],
  },
  {
    question: "A 13-year-old boy turned to an ophthalmologist with complaints of deterioration of distance vision. During his examination it was revealed that he has a spasm of accommodation. What diagnostic measure is necessary for the patient to improve his condition? ",
    answers: [
      { text: "Purkinje test", correct: true },
      { text: "dye test", correct: false },
      { text: "Schirmer test", correct: false },
      { text: "cycloplegia", correct: false },
      { text: "Seidel test", correct: false },
    ],
  },
  {
    question: "What complications are not typical for patients with hyperopia?",
    answers: [
      { text: "nystagmus", correct: true },
      { text: "chronic blepharitis", correct: false },
      { text: "amblyopia", correct: false },
      { text: "accommodative asthenopia", correct: false },
      { text: "converging squint", correct: false },
    ],
  },
  {
    question: "What is the method of refractive surgery for myopia:",
    answers: [
      { text: "LASIK", correct: true },
      { text: "Goniotomy", correct: false },
      { text: "Dacryocystorhinostomy", correct: false },
      { text: "Trabeculectomy", correct: false },
      { text: "Vitrectomy", correct: false },
    ],
  },
  {
    question: "A 3-year-old child presents with a right convergent squint of 6 months duration. What is the appropriate management?",
    answers: [
      { text: "Immediate surgical correction followed by & amblyopia therapy", correct: true },
      { text: "Proper refractive correction, amblyopia therapy followed by surgical correction", correct: false },
      { text: "Prescription of spectacles and defer surgery until 5 years", correct: false },
      { text: "Botulinum toxin injection followed by occlusion therapy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pseudoesotropia is associated with ",
    answers: [
      { text: "negative angle kappa", correct: true },
      { text: "positive angle kappa", correct: false },
      { text: "Hyperrtelorism", correct: false },
      { text: "non of the above", correct: false },
      { text: "myopia", correct: false },
    ],
  },
  {
    question: "Pseudoextropia is associated with",
    answers: [
      { text: "positive angle kappa", correct: true },
      { text: "Prominent epical fold", correct: false },
      { text: "negative angle kappa", correct: false },
      { text: "non of the above", correct: false },
      { text: "all above", correct: false },
    ],
  },
  {
    question: "Treatment of accommodative strabismus is",
    answers: [
      { text: "Refractive correction", correct: true },
      { text: "Lens implant", correct: false },
      { text: "Orthoptic exercises", correct: false },
      { text: "Prism correction", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is true of complications following strabismus  surgery?",
    answers: [
      { text: "Scleral perforation requires prophylactic treatment for possible endophthalmitis or retinal detachment", correct: true },
      { text: "Diplopia is most common in patients who develop a consecutive deviation", correct: false },
      { text: "Unsatisfactory aligment can occur with any surgical approach and therefore should not be considered a complication", correct: false },
      { text: "orbital cellulitis typicaly does not present untill 2 or 3 weeks postoperatively", correct: false },
      { text: "all above", correct: false },
    ],
  },
  {
    question: "Botulinum toxin injection is the least suitable for which of the following?",
    answers: [
      { text: "Large -angle exotropia", correct: true },
      { text: "small to moderate -angle esotropia", correct: false },
      { text: "postoperativa residual strabismus", correct: false },
      { text: "weakening of an antagonist muscle in acute paralytic strabimus", correct: false },
      { text: "nistagmus", correct: false },
    ],
  },
  {
    question: "Which of the following is not a source of error in the applanation tonometry? ",
    answers: [
      { text: " Tear film ", correct: true },
      { text: "High Pressure on the globe ", correct: false },
      { text: "Astigmatism ", correct: false },
      { text: "Wide pulse pressure", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Photostress test is positive in:",
    answers: [
      { text: "Central serous retinopathy", correct: true },
      { text: "optic neuritis", correct: false },
      { text: "Ethambutol toxicity", correct: false },
      { text: "central retinal artery occlusion", correct: false },
      { text: "all of the above", correct: false },
    ],
  },
  {
    question: "Indentation tonometer is based on the fundamental fact that a plunger with indent",
    answers: [
      { text: "More in soft eye", correct: true },
      { text: "more in hard eye", correct: false },
      { text: "equal in soft and hard eye", correct: false },
      { text: "more in children eye", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question: "Diagnostic tests that are useful in evaluation of the patient who has sustained a penetrating injury include all of the following,except",
    answers: [
      { text: "MRI", correct: true },
      { text: "CT", correct: false },
      { text: "Electrophysiology", correct: false },
      { text: "Indirect ophthalmoscopy", correct: false },
      { text: "Echography", correct: false },
    ],
  },
  {
    question: "A normal electroretinogram is ussualy found in all of the following diseases affecting the retina exept:",
    answers: [
      { text: "Juvenile retinoschisis", correct: true },
      { text: "Dominant drusen", correct: false },
      { text: "Viteliform dystrophy", correct: false },
      { text: "X-lincked ocular albibism", correct: false },
      { text: "Pattern dystrophy", correct: false },
    ],
  },
  {
    question: "A 67 y.o old woman with a complaint of sadden and painless lost of vision in right eye, which of the following  examination can be useful?",
    answers: [
      { text: "OCT", correct: true },
      { text: "Perimetey", correct: false },
      { text: "Tonometry", correct: false },
      { text: "Schirmer's test", correct: false },
      { text: "Pachimetry", correct: false },
    ],
  },
  {
    question: "Diagnostic tests that are useful in evaluation of the patient who has sustained a penetrating injury with intraocular foreign body into antrior chamber, wich  of the following ?",
    answers: [
      { text: "Gonioscopy", correct: true },
      { text: "Tonometry", correct: false },
      { text: "HRT", correct: false },
      { text: "MRI", correct: false },
      { text: "Ophthalmoscopy", correct: false },
    ],
  },
  {
    question: "Corneal verticillata is a condition characterized by corneal deposits at the level of the basal epithelium forming a faint golden-brown whorl pattern. All of the following below are causative factor for this condition except",
    answers: [
      { text: "  Tay sach's disease", correct: true },
      { text: "Chloroquine ", correct: false },
      { text: "Fabry disease ", correct: false },
      { text: "lndomethacin ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Most common type of Ptosis",
    answers: [
      { text: "Myogenic", correct: true },
      { text: "Neurogenic", correct: false },
      { text: "Aponeurotic", correct: false },
      { text: "Mechanical", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which pathology causes lipogranulomatous inflammation?",
    answers: [
      { text: "Fungal infection", correct: true },
      { text: "Tuberculosis", correct: false },
      { text: "Chalazion", correct: false },
      { text: "Viral infection", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of these pathologies treated by Weiss operation?",
    answers: [
      { text: "Cicatricial entropion", correct: true },
      { text: "Senile entropion", correct: false },
      { text: "Senile ectropion", correct: false },
      { text: "Cicatricial ectropion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Corneal sensation are decreased in:",
    answers: [
      { text: "Herpes simplex", correct: true },
      { text: "Fungal infection", correct: false },
      { text: "Trachoma", correct: false },
      { text: "Scleritis", correct: false },
      { text: "Acute bacterial ulcer", correct: false },
    ],
  },
  {
    question: "Patient N., 27 years old, complains of discomfort, foreign body sensation, slight blurring of vision within 1 day. On examination, visual acuity was 6/6. Slit lamp examination revealed conjunctival congestion, eyelids were slightly oedematous. From the anamnesis it was recognized that cilia were stuck together with yellow crusts at the morning. The expected diagnosis can be:",
    answers: [
      { text: "acute bacterial conjunctivitis", correct: true },
      { text: "hyperacute conjunctivitis of adult", correct: false },
      { text: "viral conjunctivitis", correct: false },
      { text: "fungal conjunctivitis", correct: false },
      { text: "angular conjunctivitis", correct: false },
    ],
  },
  {
    question: "A female patient 33 years old, consulted an ophthalmologist at the place of residence. Slit lamp examination revealed central necrosis of cornea. It was found that this complication appeared after suffering conjunctivitis with thick purulent discharge and severe inflammation . What conjunctivitis can be suspected in anamnesis?",
    answers: [
      { text: "hyperacute conjunctivitis of adult", correct: true },
      { text: "viral conjunctivitis", correct: false },
      { text: "fungal conjunctivitis", correct: false },
      { text: "herpes simplex  conjunctivitis", correct: false },
      { text: "angular conjunctivitis", correct: false },
    ],
  },
  {
    question: "Halos due to conjunctiva can be eliminated by ",
    answers: [
      { text: "Irrigation", correct: true },
      { text: "Slit", correct: false },
      { text: "Syringing ", correct: false },
      { text: "Any od stated", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Drug of choice in eye in trachoma endemic areas? ",
    answers: [
      { text: "Azithromycin", correct: true },
      { text: "Ganciclovir ", correct: false },
      { text: "Clindamycin ", correct: false },
      { text: "Erytromycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The operation for application of lower lid retractors is done for ",
    answers: [
      { text: "Paralytic entropion", correct: true },
      { text: "Senile entropion", correct: false },
      { text: "Cicatrical entropion", correct: false },
      { text: "Congenital entropion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Patient S., 25 years old, consulted an ophthalmologist with complains of intense itching and burning sensation, watery mucus, stringy discharge, mild photophobia of both eyes withing 5 days. Slit lamp examination revealed oedema of lids, conjunctival hyperaemia and chemosis, mild papillary reaction. Diagnosed with allergic conjunctivitis. What drugs will increase the effect of anti-allergic drops?",
    answers: [
      { text: "systemic antihistaminic drugs", correct: true },
      { text: "non-steroidal anti-inflammatory drugs", correct: false },
      { text: "topical antibiotics", correct: false },
      { text: " artificial tears like carboxymethyl cellulose", correct: false },
      { text: "topical cyclosporine", correct: false },
    ],
  },
  {
    question: "Patient О., 53 years old, complains of pain and foreign body sensation, watering from the eye, mild photophobia and blurred vision. Diagnosed with bacterial corneal ulcer. What material is needed to study the causative agent of the ulcer?",
    answers: [
      { text: "scraping the base and margins of the corneal ulcer", correct: true },
      { text: "imprint from the surface of the cornea", correct: false },
      { text: "blood from a vein", correct: false },
      { text: "corneal biopsy", correct: false },
      { text: "discharges", correct: false },
    ],
  },
  {
    question: "Patient G., 53 years old, consulted an ophthalmologist at the place of residence with complaints of mild ocular irritation, pain, photophobia and watering, decreased vision of the left eye. Examination revealed: corneal ulcer is dry-looking, greyish white, feathery finger-like extensions are present, multiple, small satellite lesions present around the ulcer. Diagnosed with mycotic corneal ulcer. What diagnostic method is effective?",
    answers: [
      { text: "Gram and Giemsa-stained films for fungal hyphae", correct: true },
      { text: "Enzyme-linked immunosorbent assay (ELISA)", correct: false },
      { text: "General blood analysis", correct: false },
      { text: "IgG Study of Blood Sera", correct: false },
      { text: "Determination of bacterial cells in the discharges", correct: false },
    ],
  },
  {
    question: "Patient L., 43 years old, consulted an ophthalmologist at the place of residence with complaints of mild ocular irritation, pain, photophobia and watering, decreased vision of the left eye. Examination revealed: corneal ulcer is dry-looking, greyish white, feathery finger-like extensions are present, multiple, small satellite lesions present around the ulcer. Diagnosed with mycotic corneal ulcer. Options for treatment?",
    answers: [
      { text: "fluconalzole (0.3%) ", correct: true },
      { text: "0.5% artificial tear solution", correct: false },
      { text: "0.3% solution of cypromed", correct: false },
      { text: "1% tetracycline ointment", correct: false },
      { text: "everything is correct", correct: false },
    ],
  },
  {
    question: "A 23-year-old female was brought to ER after she had a hit in the face with a metal instrument. On examination, right facial laceration, and contusion were noted. On examination, fracture of the right inferior orbital rim with an associated fluid level in the maxillary sinus, air within the superior orbit, and significant soft tissue swelling. Which of the following is not true about the anatomy of inferior walls of the orbit",
    answers: [
      { text: "It transmits trigeminal nerves and vessels ", correct: true },
      { text: "lnfraorbital foramen is about 1 cm from orbital rim", correct: false },
      { text: "Formed by Maxilla & zygomatic bones ", correct: false },
      { text: "Triangular in shape", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Treatment of choice of acute dacryocystitis",
    answers: [
      { text: "Systemic antibiotics and analgesics ", correct: true },
      { text: "Syringing and probing ", correct: false },
      { text: "Massage over lacrimal sac", correct: false },
      { text: "Dacryocystorhinostomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The pathognomonic sign of acute anterior uveitis is ",
    answers: [
      { text: " Keratic precipitates", correct: true },
      { text: "Оpacity of the vitreous body", correct: false },
      { text: "Retinal detachment", correct: false },
      { text: "Retinal hemorrhage", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following indicates active inflammation in anterior uveitis?",
    answers: [
      { text: "Cells in anterior chamber", correct: true },
      { text: "Circumcorneal congestion", correct: false },
      { text: "Keratic precipitate", correct: false },
      { text: "Corneal edema", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which medication has been associated with a sterile hypopyon anterior uveitis in AIDS patients?",
    answers: [
      { text: "Rifabutin", correct: true },
      { text: "Zidovudine", correct: false },
      { text: "Indinavir", correct: false },
      { text: "Pentamidine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The most common secondaries in choroid are from",
    answers: [
      { text: "Breast", correct: true },
      { text: "Brain", correct: false },
      { text: "ovary/ Testis", correct: false },
      { text: "Lungs", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 20-year-old woman presents with a painful red eye and decreased vision in her left eye. On examination, there is severe anterior chamber inflammation with hypopyon and posterior synechiae. There is also a raised, necrotic lesion on the iris. What is the most likely diagnosis?",
    answers: [
      { text: "Herpetic uveitis", correct: true },
      { text: "Acute angle-closure glaucoma", correct: false },
      { text: " Iritis", correct: false },
      { text: "Fungal endophthalmitis", correct: false },
      { text: "Tuberculous uveitis", correct: false },
    ],
  },
  {
    question: "A 50-year-old man presents with redness, pain, and decreased vision in his left eye. On examination, there is a sectoral iris atrophy, posterior synechiae, and a cataract. What is the most likely diagnosis?",
    answers: [
      { text: "Fuchs heterochromic iridocyclitis", correct: true },
      { text: "Posner-Schlossman syndrome", correct: false },
      { text: "Acute angle-closure glaucoma", correct: false },
      { text: "Cytomegalovirus retinitis", correct: false },
      { text: "Sympathetic ophthalmia", correct: false },
    ],
  },
  {
    question: "A 50-year-old man presents with blurred vision and ocular pain. On examination, there is circumciliary congestion and miosis. The intraocular pressure is elevated. Which of the following is the most likely diagnosis?",
    answers: [
      { text: "Anterior uveitis", correct: true },
      { text: "Posterior uveitis", correct: false },
      { text: "Intermediate uveitis", correct: false },
      { text: "Panuveitis", correct: false },
      { text: "Scleritis", correct: false },
    ],
  },
  {
    question: "A 25-year-old woman presents with blurred vision and photophobia in her right eye. On examination, there is ciliary injection and a small, oval-shaped pupil that reacts poorly to light. The intraocular pressure is normal. Which of the following is the most likely diagnosis",
    answers: [
      { text: "Anterior uveitis", correct: true },
      { text: "Acute angle-closure glaucoma", correct: false },
      { text: "Cataract", correct: false },
      { text: "Corneal ulcer", correct: false },
      { text: "Retinal detachment", correct: false },
    ],
  },
  {
    question: "A 60-year-old man presents with a sudden onset of floaters and decreased vision in his left eye. On examination, there is a vitreous hemorrhage and retinal detachment. Which of the following is the most likely cause of this presentation?",
    answers: [
      { text: "Posterior uveitis", correct: true },
      { text: "Anterior uveitis", correct: false },
      { text: "Intermediate uveitis", correct: false },
      { text: "Panuveitis", correct: false },
      { text: "Scleritis", correct: false },
    ],
  },
  {
    question: "Which of the following complication in cataract surgery may cause uncontrolled hypertension?",
    answers: [
      { text: "Glaucoma ", correct: true },
      { text: "Retinal detachment ", correct: false },
      { text: "Endophthalmitis ", correct: false },
      { text: "Suprachoroidal hemorrhage", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient complains of inability in reading a newspaper, particularly in bright sunlight. What is the most likely diagnosis?",
    answers: [
      { text: " Hemeralopia", correct: true },
      { text: "Presbyopia", correct: false },
      { text: "Posterior subcapsular cataract ", correct: false },
      { text: "Hypermetropia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following associations is correct ?",
    answers: [
      { text: "Posterior subcapsular cataract in Retinitis pigmentosa", correct: true },
      { text: "Posterior cataract in Amiodarone user ", correct: false },
      { text: "Anterior lenticonus in Sjogren's syndrome ", correct: false },
      { text: "Cataract in RA", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is true about the difference between congenital cataract surgery and senile cataract surgery? ",
    answers: [
      { text: "Incidence of Posterior capsular opacification is higher ", correct: true },
      { text: "Incidence of conjunctivitis is higher ", correct: false },
      { text: "The energy used in phacoemulsification is higher", correct: false },
      { text: "The chances of refractive surprise is low", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Where are seen fluctuating refractive errors with cataract ?",
    answers: [
      { text: "Morgagnian cataract", correct: true },
      { text: "Diabetic cataract", correct: false },
      { text: "Intumescent cataract", correct: false },
      { text: "Traumatic cataract", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You have been referred a middle-aged patient to rule out open angle glaucoma. Which of the following findings will help in the diagnosis",
    answers: [
      { text: "Cupping of the disc", correct: true },
      { text: "Depth of anterior chamber", correct: false },
      { text: "Visual acuity and refractive error", correct: false },
      { text: "Angle of the anterior chamber", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In a hypertensive patient with glaucoma, which of the following is not used",
    answers: [
      { text: "Dipivefrine", correct: true },
      { text: "Beta blockers", correct: false },
      { text: "Alpha agonist", correct: false },
      { text: "Laser trabeculoplasty", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You have been referred a middle-aged patient to rule out open angle glaucoma. Which of the following findings will help in the diagnosis? ",
    answers: [
      { text: "Cupping of the disc ", correct: true },
      { text: "Depth of anterior chamber ", correct: false },
      { text: "Visual acuity and refractive error ", correct: false },
      { text: "Angle of the anterior chamber", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Correction factor used in estimating disc structures when assessing through 90 D lens",
    answers: [
      { text: "1.3", correct: true },
      { text: "1.0", correct: false },
      { text: "0,88", correct: false },
      { text: "1.1", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 55-year-old diabetic patient who has recently underwent pan retinal photocoagulation for proliferative diabetic retinopathy presents with corneal edema. neovascularization over iris and an IOP of 55 mmHg. Which medications is not suitable for this patient?",
    answers: [
      { text: " Pilocarpine", correct: true },
      { text: "Dorzolamide ", correct: false },
      { text: "Apraclonidine ", correct: false },
      { text: "Atropine", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30 days old baby presents with excessive lacrimation and photo phobia. He has large hazy cornea in both eyes. His lacrimal system is normal. What is the treatment of choice for this case? ",
    answers: [
      { text: " Trabeculectomy + Trabeculotomy ", correct: true },
      { text: "Trabeculectomy +MMC ", correct: false },
      { text: "Goniotomy ", correct: false },
      { text: "lridotomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which diagnostic procedure is not done in a dilated pupil? ",
    answers: [
      { text: "Gonioscopy ", correct: true },
      { text: "Laser inferometry ", correct: false },
      { text: "Fundus examination ", correct: false },
      { text: "Electroretinography", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The patient is a woman who complained of sharp pain, redness and blurry vision in the left eye. She was diagnosed with phacomorphic glaucoma. What type of surgical treatment is indicated in this case?",
    answers: [
      { text: "Lens extraction", correct: true },
      { text: "Dacryocystorhinostomy", correct: false },
      { text: "Scleraplasty", correct: false },
      { text: "Vitrectomy", correct: false },
      { text: "Laser photocoagulasion", correct: false },
    ],
  },
  {
    question: "The most common cause of post-traumatic endophthalmitis is ",
    answers: [
      { text: "Staphyloeoeeus epidermidis", correct: true },
      { text: "Staphyloeoeeus aureus", correct: false },
      { text: "Aspergillus", correct: false },
      { text: "Bacillus cereus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Spontaneous hyphema occurs in ",
    answers: [
      { text: "Juvenile xanthogranuloma", correct: true },
      { text: "Behcet's disease", correct: false },
      { text: "SLE", correct: false },
      { text: "Syphilis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An 18 year old boy comes to the eye casuality with history of injury with a tennis ball. On examination there is no perforation but there is hyphaema. The most likely source of the blood is",
    answers: [
      { text: "Iris vessels", correct: true },
      { text: "Circulus iridis major", correct: false },
      { text: "Circulus iridis minor", correct: false },
      { text: "Short posterior ciliary vessels", correct: false },
      { text: "Choroid vessels", correct: false },
    ],
  },
  {
    question: "A 29-year-old patient went to the local clinic with complaints of pain, redness, decreased object vision in the right eye, according to the patient, 2 weeks ago he received an industrial injury while repairing a car, objectively: VOD= 0.05 uncorrected, VOS= 1.0. Right eye: the eye is injected, the cornea is slightly swollen, the iris has a yellow-green pigment deposition, the pupil is rounded, in the center, the lens is transparent, the fundus of the eye is unremarkable. What is your presumptive diagnosis?",
    answers: [
      { text: "Siderosis", correct: true },
      { text: "Chalcozis", correct: false },
      { text: "Hypopyon", correct: false },
      { text: "Hyphema", correct: false },
      { text: "Cataract", correct: false },
    ],
  },
  {
    question: "28-year-old patient consulted an ophthalmologist with complaints of severe burning sensation, a sharp decrease in object vision, edema of the eyelids, profuse lacrimation, with difficulty opening his eyes. According to the patient, while working in the laundry, foamy water got into his eyes. Objectively, VOU=0.3, the eyelids are hyperemic, edematous, the cornea is de-epithelized, cloudy, the intraocular medium is not visible. The ophthalmologist ascertained colliquation necrosis, what causes such necrosis?",
    answers: [
      { text: "Alkali", correct: true },
      { text: "Acids", correct: false },
      { text: "Increased temperature", correct: false },
      { text: "Infrared rays", correct: false },
      { text: "Ultraviolet rays", correct: false },
    ],
  },
  {
    question: "The patient has edema of upper and lower eyelids; skin of eyelids is unchanged and painless. Eye fissure is narrowed. Eyelid has crepitation on palpation. What can be assumed in this situation about the possible cause of this condition?",
    answers: [
      { text: "Fracture of medial wall of the orbit", correct: true },
      { text: "Fracture of zygomatic bone", correct: false },
      { text: "Fracture of maxilla bone ", correct: false },
      { text: "Coloboma of upper eyelid", correct: false },
      { text: "Abscessing barley of upper eyelid  ", correct: false },
    ],
  },
  {
    question: "Where does Retinoblastoma arises from?",
    answers: [
      { text: "Pigmentary epithelium", correct: true },
      { text: "Neurosensory retina", correct: false },
      { text: "Optic nerve", correct: false },
      { text: "None of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the treatment of choice for anterior lesions of retinoblastoma?",
    answers: [
      { text: "Cryotherapy", correct: true },
      { text: "Photocoagulation", correct: false },
      { text: "Both cryotherapy and photocoagulation", correct: false },
      { text: "nan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is he most common clinical presentation of retinoblastoma?",
    answers: [
      { text: "Leucocoria plus heterochromia iridis", correct: true },
      { text: "Leucocoria plus pseudohypopyon", correct: false },
      { text: "Leucocoria plus hyphema", correct: false },
      { text: "Leucocoria plus strabismus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An obese 43-year-old female complains of transient visual obscuration, headache and diplopia. All the following are findings EXCEPT",
    answers: [
      { text: "Cerebral venous thrombosis ", correct: true },
      { text: "Increased intracranial pressure ", correct: false },
      { text: "Papilledema ", correct: false },
      { text: "3rd nerve palsy ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young patient presents with sudden, painless loss of vision in one eye. Ocular examination reveals visual acuity of perception of light and cherry red spot on the fundus. A systolic murmur is heard on the chest. The probable diagnosis is:",
    answers: [
      { text: "Central retinal artery occlusion", correct: true },
      { text: "Central retinal vein occlusion", correct: false },
      { text: "Multifocal choroiditis with infective endocarditis", correct: false },
      { text: "Central serous retinopathy", correct: false },
      { text: "Hypertensive Retinopathy", correct: false },
    ],
  },
  {
    question: "A 50-year-old man was brought to the hospital due to severe ocular pain and a sudden loss of vision in the right eye while straining in a pull-up exercise. After a complete ocular examination. suprachoroidal hemorrhage was detected. Which of the following is true regarding the condition of this patient?",
    answers: [
      { text: "Deep anterior chamber ", correct: true },
      { text: "Increasing of IOP", correct: false },
      { text: "Bleeding from short posterior ciliary artery into suprachoroidal space ", correct: false },
      { text: "Self-resolving", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old male patient with visual acuity of 6/6 in both eyes. Twelve hours ago, he presented with drop of vision of the left eye. On examination, visual acuity was 6/6 in the right eye and 6/60 in the left eye. Fundus examination showed blurred edges of the left optic disc. What is the treatment of choice in this case? ",
    answers: [
      { text: "Timolol", correct: true },
      { text: "IV steroids ", correct: false },
      { text: "Antibiotics", correct: false },
      { text: "lmmunosuppressant", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which stage is considered to be subtotal retinal detachment in case of retinopathy of prematurity (ROP)? ",
    answers: [
      { text: "Stage 2", correct: true },
      { text: "Stage 3 ", correct: false },
      { text: "Stage 4", correct: false },
      { text: "Stage 5", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 35-year-old female presented with history of sudden loss of vision of the right eye for 3 days' duration. It was associated with pain in eye movement. She had a history of fever associated with ataxic gait a year ago. She had been diagnosed to have acute disseminated encephalomyelitis (ADEMJ at that time and had been treated with oral prednisolone. ocular examination revealed visual acuity of the right eye was counting finger with a positive afferent pupillary defect. The ophthalmologist suspecting optic neuritis. Which of the following is not necessary for investigating optic neuritis?",
    answers: [
      { text: "USG B scan ", correct: true },
      { text: "ESR ", correct: false },
      { text: "MRI head and orbit ", correct: false },
      { text: "Visual Fields", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient presented with complaints of diplopia. O/E pupils were dilated. Both direct and consensual light reflexes were lost. The diagnosis is",
    answers: [
      { text: "3rd nerve palsy ", correct: true },
      { text: "2nd nerve palsy ", correct: false },
      { text: "5th nerve palsy ", correct: false },
      { text: "7th nerve palsy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 6 year old child presents due to an episode of ptosis of the right eye for 1 hour. He vitals are normal and no past medical history.Physical examination reveals that his eye isdeviated downward and laterally. Which nerve palsy is associated with this patient's condition?",
    answers: [
      { text: "CN 3", correct: true },
      { text: "CN 5", correct: false },
      { text: "CN 4", correct: false },
      { text: "CN 6", correct: false },
      { text: "CN 8", correct: false },
    ],
  },
  {
    question: "Gyrate atrophy is characterized by all of the following except",
    answers: [
      { text: "Ornithine transcarbamylase deficiency", correct: true },
      { text: "Peripheral RPE affected initially", correct: false },
      { text: "High serum omithine levels", correct: false },
      { text: "Abnormalities of chromosome 10", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "This 53-year-old man with a 10-year history of adult-onset diabetes mellitus presented with a 2-month history of blurred vision OU. Medical history is positive for hypertension, peripheral neuropathy, and a history of hepatitis C. Best corrected visual acuity was 20/20 OU. Slit-lamp examination was unremarkable. The intraocular pressure was 11 mm Hg in the right eye and 12 mm Hg in the left eye. Funduscopic examination on the right showed a normal disc, no macular edema, macular lipid, or neovascularization. Intraretinal hemorrhages in two quadrants and a mild degree in the other two quadrants were present in both eyes. There was a cotton-wool spot superior to the right macula. Fluorescein angiography demonstrated microaneurysms with mild perifoveal capillary dropout, but no neovascularization. What is your diagnosis?",
    answers: [
      { text: "Nonproliferative diabetic retinopathy", correct: true },
      { text: "Background retinopathy", correct: false },
      { text: "Proliferative diabetic retinopathy", correct: false },
      { text: "Hypertensive retinopathy", correct: false },
      { text: "Central vein occlusion", correct: false },
    ],
  },
  {
    question: "A patient 63-year-old man with 8 year history of type 2 diabetes mellitus came to an ophthalmologist for consultation The ophthalmologist wrote in his report that the fundus of both eyes showed dilated and tortuous veins, microaneurysms, haemorrhages and hard exudates. What is the type of retinopathy by fundus examination?",
    answers: [
      { text: "Nonproliferative diabetic retinopathy", correct: true },
      { text: "Background retinopathy", correct: false },
      { text: "Proliferative diabetic retinopathy", correct: false },
      { text: "Hypertensive retinopathy", correct: false },
      { text: "Central vein occlusion", correct: false },
    ],
  },
  {
    question: "A 67-year-old female, suffering from diabetes mellitus for past 14 years is now complaining of photopsia, small spots and floaters in the fields of vision. Since the past 3 days, she is having visual loss in right eye with appearance of a curtain. DS: diabetic retinopathy with retinal detachment on right side. Surgical treatment?",
    answers: [
      { text: "Vitrectomy", correct: true },
      { text: "Iridotomy", correct: false },
      { text: "Scleraplasty", correct: false },
      { text: "Laser trabeculoplasty", correct: false },
      { text: "Goniotomy", correct: false },
    ],
  },
  {
    question: "A patient 64 year-old with 7 year history of insulin independent diabetes mellitis came to ophthalmologist for a consultation. The ophthalmologist wrote in his report that the fundus of both eyes showed dilated and tortuous veins, microaneurysms, haemorrhages and hard exudates. DS: Nonproliferative diabetic retinopathy. Surgical treatment?",
    answers: [
      { text: "Laser photocoagulation", correct: true },
      { text: "Iridotomy", correct: false },
      { text: "Scleroplasty", correct: false },
      { text: "Laser trabeculoplasty", correct: false },
      { text: "Goniotomy", correct: false },
    ],
  },
  {
    question: "A 48-year-old man with a 16-year history of insulin-dependent diabetes and chronic hypercholesterolemia sought consultation because of blurred vision of several weeks duration. Examination of the eye: VOU - 20/45. Slit-lamp examination showed only trace nuclear lens opacity. Funduscopic examination showed moderate microaneurysms scattered about all quadrants of both eyes. In the right eye, there was clinically signicant diabetic macular edema with a circinate lipid ring surrounding the center of the macula. No neovascular changes were seen. In the left eye, in addition to the microaneurysms and macular edema with lipid, there was early neovascularization at the disc. Which method of investigation will determine the form of this pathology?",
    answers: [
      { text: "Fluorescence angiography", correct: true },
      { text: "Slit lamp", correct: false },
      { text: "Refractometry", correct: false },
      { text: "Diaphanoscopy", correct: false },
      { text: "Goniotomy", correct: false },
    ],
  },
  {
    question: "A patient 65 year-old with 8 year history of insulin dependent diabetes mellitis came to ophthalmologist for a consultation. The ophthalmologist wrote in his report that the fundus of both eyes showed dilated and tortuous veins, microaneurysms, haemorrhages and hard exudates. DS: Nonproliferative diabetic retinopathy. Nonsurgical treatment?",
    answers: [
      { text: "Anti-VEGF therapy", correct: true },
      { text: "Antibacterial therapy", correct: false },
      { text: "Increasing insulin dose", correct: false },
      { text: "Decreasing insulin dose", correct: false },
      { text: "Add corticisteroid drops", correct: false },
    ],
  },
  {
    question: "Which of the following treatment plans is most appropriate for first-line treatment of a patient with early glaucoma who has indicated they will be likely to forget to take their eyedrops? ",
    answers: [
      { text: "Trabeculoplasty", correct: true },
      { text: "Trabeculectomy", correct: false },
      { text: "Acetazolomide", correct: false },
      { text: "Travoprost", correct: false },
      { text: "Timolol", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
