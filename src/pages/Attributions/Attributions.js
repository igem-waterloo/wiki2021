
import React, { useState } from 'react';
import overallStyles from '../overall.module.scss';
import Collapsible from "../../utils/Collapsible";

const Attributions = () => {
        return (
            <div className={overallStyles.container}>
                <div className={overallStyles.heading_div}>
                    <div className={overallStyles.title}>
                        <div className={overallStyles.page_heading}>NeuroDetech</div>
                        <div className={overallStyles.page_heading_colored}>Attributions.</div>
                    </div>
                    <div className={overallStyles.illustration}></div>
                </div>
                <div className={overallStyles.text_div}>
                    <div className={overallStyles.description}>
                        The completion of NeuroDetech would not have been possible without guidance from our staff advisors, stakeholder feedback, and devoted team members. We would like to take thank the following people for their contributions:
                    </div>
                    <Collapsible open title="Advisors">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Professor Brian Ingalls, PhD | Department of Applied Mathematics 
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Assessed feasibility in project selection process
                                </li>
                                <li>
                                    Aided in administrative and financial upkeep
                                </li>
                                <li>
                                    Provided feedback for Jamboree presentation
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Professor Trevor Charles, PhD | Department of Biology
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Specializes in bacterial genetics and functional metagenomics
                                </li>
                                <li>
                                    Provided insight on project direction and development
                                </li>
                                <li>
                                    Acted as liaison with external organizations
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Professor Marc Aucoin, PhD | Department of Chemical Engineering
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Assessed feasibility of various projects options
                                </li>
                                <li>
                                    Considered computational modelling opportunities through process engineering lens
                                </li>
                                <li>
                                    Research interests: Virus and therapeutic protein production and purification, animal cell culture, and metabolomics
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Professor Barbara Moffat, PhD | Department of Biology
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Expert in gene expression and enzyme regulation for plant metabolism
                                </li>
                                <li>
                                    Provided feedback on project development and presentation 
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Dr. Forbes Burkowski | Professor Emeritus | Cheriton School of Computer Science
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Co-ordinated outreach and recruitment opportunities
                                </li>
                                <li>
                                    Provided feedback on project selection and overall development
                                </li>
                            </ul>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Stakeholders">
                        <div className={overallStyles.text_div}>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                JVS Toronto
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Organization providing employment and career services across the GTA
                                </li>
                                <li>
                                    Provided information on internal psychoeducational assessment for adults
                                </li>
                                <li>
                                    Played key role in the development of the diagnosis pipeline for different age groups
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Vera Roncon, MA, C. Psych, Registered Clinical Psychologist | Mt. Pleasant Therapy Centre
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Provided specific insight on the diagnosis process
                                </li>
                                <li>
                                    Clarified the roles of psychologists as well as the ordering of lab work
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Dr. Megan Smith, C.Psych
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Provided information on the existing biases and difficulties in diagnosing females
                                </li>
                                <li>
                                    Guided project implementation direction due to bias reduction
                                </li>
                                <li>
                                    Clarified lab work procedures
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Dr. Janet Patterson, MD
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Noted the importance of comorbidities in the diagnosis of mental disorders
                                </li>
                                <li>
                                    Provided input on the direction of project implementation
                                </li>
                                <li>
                                    Explained difference between neurocognitive and psychodiagnostic testing 
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Susan Eiley, ADHD Coach
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Provided information on the design of accessible websites
                                </li>
                                <li>
                                    Introduced additional stakeholders and medical professionals to connect with
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Dynacare Labs, Billing Department
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Commented on the availability and costs of lab tests
                                </li>
                                <li>
                                    Provided information about OHIP precedences that are relevant to NeuroDetech
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Joseph Brant Hospital - Chemistry &amp; Biochemistry Lab
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Commented on the type of available diagnostic equipment at the hospital
                                </li>
                            </ul>
                            <div className={overallStyles.description} style={{marginBottom: "-3%"}}>
                                Cherly Mccabe, ADHD Clinic Assessment Assistant
                            </div>
                            <ul className={overallStyles.description}>
                                <li>
                                    Provided detailed breakdown of ADHD assessment and associated costs
                                </li>
                            </ul>
                        </div>
                    </Collapsible>
                    <Collapsible open title="Team Members">
                    <div className={overallStyles.text_div}>
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Amy Wohlgemuth    
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Determined electronic analyzation of chemiluminescent to be appropriate method of data visualisation
                            </li>
                            <li>
                                Selected photo-diode as the appropriate tool for magnification of light while limiting transmission of noise
                            </li>
                            <li>
                                Analyzed fluid mechanics within microstructures and properties of urine optimizing chip function 
                            </li>
                            <li>
                                Modelled loading chamber, drying chamber, delay valves, and assembled NeuroDetech chip components using ONshape
                            </li>
                            <li>
                                Analyzed alternative geometric approaches for possible future iterations    
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Ana Fernandez
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Co-managed Human Practices subteam
                            </li>
                            <li>
                                Evaluated project direction and development, along with other subteam leads 
                            </li>
                            <li>
                                Contributed to outreach events such as WiSTEM collaboration, high school outreach talks &amp; Waterloo design team showcases 
                            </li>
                            <li>
                                Participated in Calgary's JulyGEM conference and the 2021 cGEM conference     
                            </li>
                            <li>
                                Authored, edited, and organized wiki pages relating to Human Practices
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Ananya Muralidharan 
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched various conjugation methods for molecules within the assay and identified the most suitable method based on optimal assay stability
                            </li>
                            <li>
                                Collaborated with HP to create safety procedures dealing with the use and dispensing of the assay based on literature
                            </li>
                            <li>
                                Researched the ELISA mechanism to identify the best protein candidates for the assay reaction
                            </li>
                            <li>
                                Edited Wiki sections
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Angad Singh
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched analyte candidates
                            </li>
                            <li>
                                Researched symptoms and bio pathways of analyte and quantity of analyte within blood/urine/etc.
                            </li>
                            <li>
                                Researched urine characteristics and urinalysis and chemiluminescence methods
                            </li>
                            <li>
                                Researched aptamer design process
                            </li>
                            <li>
                                Researched SATORI method for analysis and diagnostics  
                            </li>
                            <li>
                                Researched chip materials and microfluidics techniques
                            </li>
                            <li>
                                Researched lyophilization techniques and pathways
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Anthony Dang
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Co-managed the Lab and Design subteam
                            </li>
                            <li>
                                Evaluated overall project direction and design alongside other team leads
                            </li>
                            <li>
                                Researched ADHD-associated genes, RNA stability, CRISPR-Cas13 for diagnostic applications
                            </li>
                            <li>
                                Taught fusion protein design and structural protein modelling principles
                            </li>
                            <li>
                                Represented Waterloo iGEM at outreach events and conferences
                            </li>
                            <li>
                                Authored, edited, and organized wiki pages relating to Lab and Design
                            </li>
                            <li>
                                Created and added documentation to BioBrick part pages
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Ashish Kumar
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched CRISPR Cas13 and if we are able to apply it to mRNA detection in urine (SATORI Method w/ Angad and SHERLOCK)
                            </li>
                            <li>
                                Cas13a mRNA region on Chimera
                            </li>
                            <li>
                                In-silico (ie. SELEX) aptamer design methods
                            </li>
                            <li>
                                Looked into PEA binding protein candidates (ie. TynA)
                            </li>
                            <li>
                                Helped WIKI writing (why we switched from biomolecules to DNA detection methods part) and editing the WIKI (LFA and BMW)
                            </li>
                            <li>
                                Analyte candidates
                            </li>
                            <li>
                                ADHD associated genes (DRD4)
                            </li>
                            <li>
                                Contributed to Cas13a sequence (from UniProt) and Benchling modelling
                            </li>
                            <li>
                                in vivo culture biosensors
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Ayesha Asif
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Assisted the stakeholders HP subteam 
                            </li>
                            <li>
                                Worked on iGEM social media page along with social media wiki outreach write up    
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Braeden MacDougall
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched types and limitations of lateral flow assays
                            </li>
                            <li>
                                Researched and compared various Ligand/Molecular Docking Softwares
                            </li>
                            <li>
                                Researched uses and properties of Horseradish peroxidase
                            </li>
                            <li>
                                Researched PEA-binding proteins, removal of catalytic activity from 1-UTM
                            </li>
                            <li>
                                Assisted in the writing and editing processes of Lab subteam wiki contributions
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Chelsea Huang
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched capillary pump designs for chip geometry design
                            </li>
                            <li>
                                Built CAD model of capillary pump as well as 2 additional geometries to allow for testing and comparison
                            </li>
                            <li>
                                Verified the integrity of CAD assembly connections
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Chimdindu Ohaegbu                    
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched different docking software (AutoDock 4 and AutoDock Vina)
                            </li>
                            <li>
                                Identified binding pocket residues of 1UTM using Chimera
                            </li>
                            <li>
                                Used rational protein design principles to suggest double mutations for 1UTM and assisted in proposing multiple mutations
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Clare Wei
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Evaluated and designed structure of initial project selection with leads team    
                            </li>
                            <li>
                                Co-directed Facilitated human practices subteam responsibilities     
                            </li>
                            <li>
                                Represented Waterloo iGEM at outreach events and conferences such as BioTEC Create, high school workshops, and student design showcases    
                            </li>
                            <li>
                                Authored and edited wiki pages relating to human practices, education, collaboration, implementation, inclusion, and attributions    
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Daniel Matlin
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Created understandable summary of primary literature basis for NeuroDetech for team's reference
                            </li>
                            <li>
                                Contributed to initial work on microcontroller hardware design and software development
                            </li>
                            <li>
                                Contributed to development of desktop app
                            </li>
                            <li>
                                Edited, formatted, and contributed to the Engineering wiki page
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Dorothy Lin
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Contacted stakeholders regarding questions about implementation and general inquiries    
                            </li>
                            <li>
                                Help create the pride month post for instagram
                            </li>
                            <li>
                                Wrote and edited respective wiki pages              
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Emily Dong
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Assisted in creating diagnosis pipeline visuals    
                            </li>
                            <li>
                                Part of original project brainstorming team    
                            </li>
                            <li>
                                Authored and edited wiki pages for career outreach event and diagnosis pipeline    
                            </li>
                            <li>
                                Planned and executed careers in synbio outreach event
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Emma Catalan
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched ADHD diagnosis pipeline and some diagnosis biases        
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Fatima Anwar
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Was involved in project selection
                            </li>
                            <li>
                                Researched different types of lateral flow assays for consideration. worked mainly on creating a design for the biotin filter which would be effective, reusable, inexpensive, and efficient, while mitigating issues that would arrive with the various proposed filter methods
                            </li>
                            <li>
                                Helped math with relaying information from lab and design regarding structure and modelling        
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Gen Belford
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched analyte candidates    
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Gerald Lee
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Major contributions to the design and construction desktop app
                            </li>
                            <li>
                                Testing and improving the desktop end of the app
                            </li>
                            <li>
                                Research into libraries to use for packaging and display of data
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Harshit Manchanda
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Developed the wiki website
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Jacquelyn Easson
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Helped in creating the ADHD pipeline visulas     
                            </li>
                            <li>
                                Was a part of the social media outreach team, creating posts based on the Olympics     
                            </li>
                            <li>
                                Helped in contacting potential stakeholders
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            James Phan 
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Designed wiki layout and associated graphics/logos
                            </li>
                            <li>
                                Edited and conceptualized project description video
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            James Stapleton
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Oversaw and guided work being done by finance microteam
                            </li>
                            <li>
                                Obtained funding from school endowment funds to finance team participation and research
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Janie Ong
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Determined the importance of having a urinalysis as a pre-test control
                            </li>
                            <li>
                                Wrote the urinalysis procedure section of the Wiki
                            </li>
                            <li>
                                Researched assay types and various ADHD analyte candidates
                            </li>
                            <li>
                                Contributed to researching the test chamber and substrate pathway of the microfluidic flow assay
                            </li>
                            <li>
                                Collaborated with Human Practices to define our project's environmental, social, and moral values
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Jessica Zhang
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched aptamers and their design process, including softwares involved in the modelling of aptamers
                            </li>
                            <li>
                                Examined machine learning with computer vision as a viable option for quantifying LFA results
                            </li>
                            <li>
                                Researched potential streptavidin linker sequences for fusion protein construction
                            </li>
                            <li>
                                Studied biotinylation process to be used in fusion protein construction
                            </li>
                            <li>
                                Determined optimal vector and E. coli strain for synthesizing fusion protein
                            </li>
                            <li>
                                Created tutorial for docking software (Chimera with Autodock Vina)
                            </li>
                            <li>
                                Authored, edited and formatted wiki pages for lab team
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Jessy Song
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Co-managed the math and modelling subteam 
                            </li>
                            <li>
                                Evaluated overall project direction and design alongside other team leads
                            </li>
                            <li>
                                Researched protein design, microfluidic chip CAD design, optical detector and application development to guide math team's research and development
                            </li>
                            <li>
                                Managed wiki development and design
                            </li>
                            <li>
                                Authored, edited and organized wiki pages related to Math and Modelling
                            </li>
                            <li>
                                Represented Waterloo iGEM at outreach events and conferences
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Jimin Lee
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Collaborated with team members to produce the lyophilization procedure 
                            </li>
                            <li>
                                Analyzed chemiluminescence reagents for clear results 
                            </li>
                            <li>
                                Calculated the amount of binding molecules necessary in each assay 
                            </li>
                            <li>
                                Worked with other subteams to add perspective; gave insight as lab team member to human practices team to execute knowledge translation 
                            </li>
                            <li>
                                Independently researched to present analyte candidates and LFA design candidates 
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Joshua Hanneson
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched analyte candidates and ADHD-related neurological pathways 
                            </li>
                            <li>
                                Researched methodologies for designing/selecting aptamers
                            </li>
                            <li>
                                Determined potential streptavidin linker sequences for usage in a fusion protein
                            </li>
                            <li>
                                Researched the CRISPR CAS-13 SHERLOCK method as a diagnostic technique
                            </li>
                            <li>
                                Modeled fusion constructs in UCSF Chimera
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Julie Li
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Communicated with stakeholders involved in the ADHD diagnosis process    
                            </li>
                            <li>
                                Collaborated in creating the ADHD diagnosis procedure visuals    
                            </li>
                            <li>
                                Authored and edited wiki pages relating to human practices    
                            </li>
                            <li>
                                Planned and co-hosted the Careers in SynBio event    
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Kellie Chong
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched ligand docking, protein mutation, and energy scoring protocols in Rosetta
                            </li>
                            <li>
                                Rational protein design to enhance the binding affinity in UCSF Chimera
                            </li>
                            <li>
                                Developed Python script to automate the ligand docking and energy minimization processes via Chimera and AutoDock Vina for the binding kinetics analysis
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Kevin Kim
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched analyte quantification metrics and unit conversions
                            </li>
                            <li>
                                Led the hardware design of a chemiluminescence detector
                            </li>
                            <li>
                                Took on prototyping tasks ranging from hardware selection and sensor interfacing, to circuit design, schematic capture, and PCB layout
                            </li>
                            <li>
                                Microcontroller programming in C++ to interface with hardware using serial communication protocols
                            </li>
                            <li>
                                Contributed to the testing and development of a Python-based desktop application by implementing a serial communication interface
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Lorenzo Pérez
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched analyte candidates
                            </li>
                            <li>
                                Researched multiple chip materials and then focused on PDMS
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Michael Lam
                        </div>
                        <ul className={overallStyles.description}>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            -	Researched PEA &amp; PEA-binding proteins
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Collaborated with Math to assess 3D homology model with Rosetta
                            </li>
                            <li>
                                Collaborated with HP to answer "How did the team close the loop between what was designed and what was desired?"
                            </li>
                            <li>
                                Wrote PEA-binding protein selection Wiki section
                            </li>
                            <li>
                                Edited Wiki sections
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Rajosree Paul
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched PEA-Binding proteins, pre-treatments for LFA design, and how PEA levels vary in individuals with and without ADHD.    
                            </li>
                            <li>
                                Looked into how to filter urine and urinalysis pre-cursor conditions                
                            </li>
                            <li>
                                Reached out to stakeholders to ask for feedback on our project.     
                            </li>
                            <li>
                                Edited wiki
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Rene Lam
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched protein mutation, energy scoring and algorithm behind Rosetta point mutation protocol 
                            </li>
                            <li>
                                Used high performance computer (graham) to generate single, double and multiple mutations for 1UTM and streptavidin and generate energy scores
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Renessa Gomes
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched analyte candidates
                            </li>
                            <li>
                                Researched PEA-binding proteins
                            </li>
                            <li>
                                Evaluated RNA stability in urine from literature
                            </li>
                            <li>
                                Researched potential LFA design layouts from literature
                            </li>
                            <li>
                                Compared methods of detection 
                            </li>
                            <li>
                                Studied immobilization strategies
                            </li>
                            <li>
                                Prepared lyophilization protocol for detection reagents
                            </li>
                            <li>
                                Evaluated different enzyme-substrate complexes for chemiluminescent detection
                            </li>
                            <li>
                                Wrote and edited wiki sections (horseradish peroxidase, selection of PEA as protein analyte, selection of 1-UTM as PEA-binding protein, RNA stability in urine)
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Sarah Hardy
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Co-managed the Lab and Design subteam
                            </li>
                            <li>
                                Evaluated overall project direction and design alongside other team leads
                            </li>
                            <li>
                                Coordinated Women in STEM collaboration and high school outreach
                            </li>
                            <li>
                                Represented Waterloo iGEM at  multiple student design showcases and outreach events
                            </li>
                            <li>
                                Authored, edited, and organized wiki pages relating to Lab and Design
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Serena Hacker
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Performed molecular dynamics simulations using GROMACS to evaluate candidate proteins’ relative binding affinities to PEA
                            </li>
                            <li>
                                Created CAD model for the spiral reaction chambers using Onshape
                            </li>
                            <li>
                                Modelled fluid flow through the NeuroDetech chip using microfluidics simulations in COMSOL Multiphysics
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Siranjit Kaur
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Reached out and contacted stakeholders in the medical, laboratory and psychological field about ADHD     
                            </li>
                            <li>
                                Analyzed and researched the financial impact of the project    
                            </li>
                            <li>
                                Designed a science outreach colouring book with the incorporation of synbio    
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Sophia Tan
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched potential analyte candidates indicative of ADHD, lateral flow assay types, chemiluminescence and urinalysis procedure
                            </li>
                            <li>
                                Contacted stakeholders to garner professional perspective and feedback about our project design
                            </li>
                            <li>
                                Collaborated with Math &amp; Modelling to provide insight into analyte quantification
                            </li>
                            <li>
                                Edited Wiki sections
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Sutej Dayal
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched into methods and materials for use in the microfluidic chip and narrowed down to PDMS 
                            </li>
                            <li>
                                Helped research analyte candidates. 
                            </li>
                            <li>
                                Researched into the methods to produce the microfluidic chip, the most effective designs for the microfluidic chip as well as costs associated. 
                            </li>
                            <li>
                                Researched into the pretreatment options to reduce hydrophobicity in the PDMS and narrowed it down to one treatment options
                            </li>
                            <li>
                                Researched into specific PEA binding proteins 
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Taylor Roth
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched microfluidic chip geometry design
                            </li>
                            <li>
                                Built CAD model of loading chamber, drying chamber, and delay valves using Onshape
                            </li>
                            <li>
                                Assembled complete chip model using Onshape
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Temitope Lekuti
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Reached out and contacted stakeholders in the psychological field about ADHD    
                            </li>
                            <li>
                                Designed science outreach colouring book describing biological concepts relating to synbio to high school student audience     
                            </li>
                            <li>
                                Authored and edited wiki pages relating to human practices (in vivo implementation)    
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Teodora Vujovic
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Co-managed the Math and Modelling subteam
                            </li>
                            <li>
                                Led the quantification and process design microteams and guided the Math and Modelling team’s research alongside Jessy Song
                            </li>
                            <li>
                                Evaluated overall project direction and design alongside other team leads
                            </li>
                            <li>
                                Co-coordinated MUBO, high school, and Renison student showcase outreach
                            </li>
                            <li>
                                Represented Waterloo iGEM at multiple student design showcases and outreach events
                            </li>
                            <li>
                                Authored, edited, and organized wiki pages relating to Math and Modelling
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Tsz Yan Au
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Developed the wiki website and populated content
                            </li>
                            <li>
                                Worked on the accessibility toolbar
                            </li>
                        </ul> 
                        <div className={overallStyles.description} style={{marginBottom: "-3%"}}> 
                            Wendy Lu
                        </div>
                        <ul className={overallStyles.description}>
                            <li>
                                Researched and analyzed methods to quantify LFA results
                            </li>
                            <li>
                                Assisted with microcontroller programming
                            </li>
                            <li>
                                Formulated processes to convert voltage values to biomarker concentrations
                            </li>
                            <li>
                                Co-authored and edited wiki sections related to Math and Modelling
                            </li>
                        </ul> 

                    </div>
                    </Collapsible>
                </div>
            </div>
        )
}

export default Attributions;