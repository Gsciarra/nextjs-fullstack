import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/components/ui/card";
import { typeOptions } from "./utils";
import { Input } from "@repo/components/ui/input";

function typeToPlaceholder(type: string) {
  switch (type) {
    case "text":
      return "Text";
    case "password":
      return "Password";
    case "email":
      return "Email";
    case "number":
      return "Number";
    case "tel":
      return "Tel";
    case "url":
      return "URL";
    case "search":
      return "Search";
    case "date":
      return "Date";
    case "time":
      return "Time";
    case "datetime-local":
      return "Datetime Local";
    case "month":
      return "Month";
    case "week":
      return "Week";
    case "file":
      return "File";
    case "color":
      return "Color";
  }
}

export default function Preview() {
  return (
    <Card className={"w-fit text-center"}>
      <CardHeader>
        <CardTitle>Inputs</CardTitle>
      </CardHeader>
      <CardContent>
        {Array.from(typeOptions).map((type) => (
          <div key={type} className={"pt-2 h-12 flex justify-center"}>
            <Input
              type={type}
              placeholder={typeToPlaceholder(type ?? "text")}
              className={"w-fit min-w-12"}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
