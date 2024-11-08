import React, { useState, useCallback, Suspense, memo, useEffect } from 'react';

import { fetchUsers } from '@api/userApi';
import useInfiniteScroll from '@hooks/useInfiniteScroll';
import UserCardsLoader from '@components/User/UserCardsLoader';
import { LoadingSpinner } from '@components/ui/loading-spinner';
import { ErrorText } from '@components/ui/error-text';

const UserCard = React.lazy(() => import('@components/User/UserCard'));

/**
 * UserList component that renders a list of users with infinite scrolling.
 * Utilizes lazy loading for individual user cards to optimize performance.
 *
 * @component
 *
 * @returns {JSX.Element} The UserList component.
 */
const UserList = memo(() => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Loads more items when triggered by the infinite scroll.
     *
     * Fetches the next page of users, appending them to the existing user list,
     * and updates the page count and hasMore status.
     *
     * @async
     * @function
     */
    const loadUsers = useCallback(async () => {
        setIsLoading(true);
        try {
            const newUsers = await fetchUsers(page);
            setUsers((prevUsers) => [...prevUsers, ...newUsers]);
            setHasMore(newUsers.length > 0); // Set to false if no new users are fetched
            setPage((prevPage) => prevPage + 1);
        } catch (e) {
            setError(e);
        }
        setIsLoading(false);
    }, [page]);

    // load initial users
    useEffect(() => {
        loadUsers();
    }, []);

    const { setLastElement, isFetching } = useInfiniteScroll({
        loadMore: loadUsers,
        hasMore,
        isLoading,
        threshold: 0.2,
    });

    return (
        <div className="space-y-4">
            {error && <ErrorText text={error.message} />}
            {isLoading && <LoadingSpinner className="mx-auto" />}
            <Suspense fallback={<LoadingSpinner className="mx-auto" />}>
                {users.map((user, index) => (
                    <UserCard
                        key={user.login.uuid}
                        ref={index === users.length - 1 ? setLastElement : null}
                        user={user}
                    />
                ))}
                {isFetching && <UserCardsLoader />}
            </Suspense>
        </div>
    );
});

export default UserList;
