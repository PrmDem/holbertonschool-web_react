interface MajorCredits {
  credits: number;
  // __brand: "Major"; <- not the most robust way to use nominal typing
}

// Using types intersections instead to ensure errors are caught
type Major = MajorCredits & { readonly __brand: "Major" };

interface MinorCredits {
  credits: number;
  // __brand: "Minor"
}

type Minor = MinorCredits & { readonly __brand: "Minor" };

function sumMajorCredits(subject1: Major, subject2: Major): Major {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "Major"
  } as Major
}

function sumMinorCredits(subject1: Minor, subject2: Minor): Minor {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "Minor"
  } as Minor
}

const majorSubject1: Major = {
  credits: 4,
  __brand: "Major"
} as Major;

const majorSubject2: Major = {
  credits: 3,
  __brand: "Major"
} as Major;

const minorSubject1: Minor = {
  credits: 2,
  __brand: "Minor"
} as Minor;

const minorSubject2: Minor = {
  credits: 1,
  __brand: "Minor"
} as Minor;

console.log("Sum of major credits: ", sumMajorCredits(majorSubject1, majorSubject2));
console.log("Sum of minor credits: ", sumMinorCredits(minorSubject1, minorSubject2));
