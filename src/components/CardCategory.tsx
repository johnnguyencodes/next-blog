import { formatDate } from "@/app/blog/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardCategory({
  title,
  summary,
  date,
}: {
  title: string;
  summary: string;
  date: string;
}) {
  return (
    <Card className="h-[290px] w-[350px] transform border-0 bg-lightmode-white transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg dark:bg-darkmode-black dark:shadow-darkmode-black-900">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{summary}</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-lightmode-red dark:text-darkmode-red">
          {formatDate(date)}
        </p>
      </CardFooter>
    </Card>
  );
}
