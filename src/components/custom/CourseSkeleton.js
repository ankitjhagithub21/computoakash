import {
    Card,
    CardFooter,
    CardHeader,
    
} from "@/components/ui/card"

const CourseSkeleton = () => {
    return (
        <Card className="pt-0 overflow-hidden animate-pulse">
            <div className="h-54 w-full bg-gray-200" />
            <CardHeader>
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-full" />
            </CardHeader>
            <CardFooter>
                <div className="h-10 bg-gray-300 rounded w-full" />
            </CardFooter>
        </Card>
    );
};

export default CourseSkeleton