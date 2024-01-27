
interface EmailTemplateProps {
    firstName: string;
}

export const EmailTemplate = ({ firstName }: { firstName: string }) => (
    <div>
        <h1>Welcome, {firstName}!</h1>
    </div>
);

export default EmailTemplate;