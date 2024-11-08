import { memo } from 'react';

import { Card, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

/**
 * UserCardsLoader component that renders a list of skeleton loader
 *
 * @returns {JSX.Element} - The UserCardsLoader component.
 */
const UserCardsLoader = memo(({ skeletonCount = 5 }) => {
    return Array.from({ length: skeletonCount }, (_, idx) => (
        <Card key={idx} className="p-4 shadow-md">
            <CardHeader className="flex items-center space-x-4">
                <Skeleton className="h-20 w-20 rounded-full mx-auto mb-2" />
                <Skeleton className="h-6 w-3/4 mb-5 mx-auto" />
                <Skeleton className="h-6 w-1/2 mx-auto" />
            </CardHeader>
        </Card>
    ));
});

export default UserCardsLoader;
