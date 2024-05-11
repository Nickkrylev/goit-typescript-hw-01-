interface Address {
    city: string;
    country: string;
}

interface User {
    name: string;
    age: number;
    email: string;
    address?: Address; // Вказуємо, що адреса є необов'язковою властивістю
}
