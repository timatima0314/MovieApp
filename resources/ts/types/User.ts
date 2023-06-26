type User = {
    id: number
    name: string
    email: string
}
type Login = {
    email: string;
    password: string;
};

type SingUp = {
    name: string
    email: string;
    password: string;
}
export { User, Login, SingUp }