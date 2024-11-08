import { forwardRef } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * UserCard component that displays user information using ShadCN Card.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.user - The user data to display.
 * @param {React.Ref} ref - The ref for the card element, used for infinite scroll.
 * @returns {JSX.Element} - The UserCard component.
 */
const UserCard = forwardRef(({ user }, ref) => (
    <Card ref={ref} className="p-4 shadow-md ">
        <CardHeader className="flex items-center space-x-4">
            <img
                src={user.picture.thumbnail}
                alt={`${user.name.first} ${user.name.last}`}
                className="h-20 w-20 rounded-full mb-2"
                loading="lazy"
            />
            <div className="text-center">
                <CardTitle className="dark:text-darkText mb-2">{`${user.name.first} ${user.name.last}`}</CardTitle>
                <CardContent className="text-gray-500 dark:text-gray-400">{user.email}</CardContent>
            </div>
        </CardHeader>
    </Card>
));

export default UserCard;
