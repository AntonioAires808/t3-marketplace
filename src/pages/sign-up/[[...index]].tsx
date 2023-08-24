import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => (
    <div style={styles}>
        <SignUp path="/sign-in" routing="path" signInUrl="/sign-up"></SignUp>
    </div>
)

const styles = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export default SignUpPage;