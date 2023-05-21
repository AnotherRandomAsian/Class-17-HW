// const getName = (firstName: string, lastName: string): string => {
//     return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
// };

// console.log(getName('John', 'Wick').toUpperCase());
// console.log(getName('Jane', 'Doe'))

const calculateAge = (birthdate: Date): number | string => {
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (birthdate > today) {
        return 'Birthdate is invalid';
    }

    return age;
};

const parseDate = (input: string): Date => {
    const splitDate = input.split('-');

    if (splitDate.length !== 3) {
        throw 'Input is invalid';
    }

    const yearInNum = +splitDate[0]
    const MonthInNum = +splitDate[1]
    const dayInNum = +splitDate[2]

    const dateObj = new Date(yearInNum, MonthInNum, dayInNum);

    return dateObj;
}

const celsiusToFahrenheit = (celsius: number): Number => {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}