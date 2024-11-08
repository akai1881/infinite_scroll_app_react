import UserList from '@components/User/UserList';

/**
 * UserPage Component
 *
 * This component displays a page with a list of users. It renders a title and the
 * UserList component, which handles the actual user data.
 *
 * @component
 * @example
 *
 * <UserPage />
 *
 * @returns {JSX.Element} A section containing the user list page layout
 */
const UserPage = () => {
    return (
        <section className="max-w-xl mx-auto p-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center mb-5">
                User List
            </h1>
            <UserList />
        </section>
    );
};

export default UserPage;
