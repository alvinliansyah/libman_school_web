export default function ApplicationLogo(props, { className }) {
    return (
        <img
        {...props}
        className={`${className} w-30 h-7`}
        src="/Assets/Images/Logo2.png"
        alt="Application Logo"
      />
    );
}