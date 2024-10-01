export type Success<T> = {
    data: T;
    message: string
}

export type Error = {
    type: "Validation Error" | "Response Error" | "File Upload Error" | "Unknown Error";
    errors: any
    message: string
}

export type Testimony = {
    // theme: "orange" | "blue" | "green"
    image: string;
    message: string;
    person: { name: string, age: number; job: string }
}

export type Auth = {
    username: string;
    email: string;
    password?: string;
    createdAt: string;
}

export type Product = {
    id: number,
    title: string,
    image: string,
    originalPrice: number,
    strikeoutPrice: number,
    description: string,
    createdAt: string | Date,
    updatedAt: string | Date
}