class JobOffers{
    constructor(employer, position){
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates){
        candidates.forEach(candidate => {
            let [name, education, yearsExp] = candidate.split("-");
            let existingCandidate = this.jobCandidates.find(c => c.name === name);
      
            if (existingCandidate) {
              if (Number(yearsExperience) > Number(existingCandidate.yearsExperience)) {
                existingCandidate.yearsExperience = yearsExperience;
              }
            } else {
              this.jobCandidates.push({name: name, education: education, yearsExperience: yearsExp});
            }
          });
      
        let candidateNames = this.jobCandidates.map(candidate => candidate.name).join(", ");
        return `You successfully added candidates: ${candidateNames}.`;
    }

    jobOffer(chosenPerson){
        let [name, minimalExperience] = chosenPerson.split("-");
        let selectedCandidate = this.jobCandidates.find(candidate => candidate.name === name);
    
        if (!selectedCandidate) {
          throw new Error(`${name} is not in the candidates list!`);
        }
    
        if (Number(selectedCandidate.yearsExperience) < Number(minimalExperience)) {
          throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }
    
        selectedCandidate.yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name){
        let selectedCandidate = this.jobCandidates.find((candidate) => candidate.name === name);
        
        if(!selectedCandidate){
            throw new Error (`${name} is not in the candidates list!`);
        }

        if(selectedCandidate.education === "Bachelor"){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        }else if(selectedCandidate.education === "Master"){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        }else{
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase(){
        if(this.jobCandidates.length === 0){
            throw new Error ("Candidate Database is empty!");
        }

        const sortedCandidates = this.jobCandidates
        .map(candidate => `${candidate.name}-${candidate.yearsExperience}`)
        .sort((a, b) => a.localeCompare(b));
  
        
      return "Candidates list:\n" + sortedCandidates.join("\n");
    }
}

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.salaryBonus("Peter Parker"));

let Jobs = new JobOffers ("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());



