import { Button, ButtonProps } from "@repo/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  CheckIcon,
  TrashIcon,
  LinkIcon,
  ArrowLeftIcon,
} from "@heroicons/react/16/solid";

const variants: Set<ButtonProps["variant"]> = new Set([
  "default",
  "destructive",
  "outline",
  "secondary",
  "link",
  "ghost",
]);

function variantToLabel(variant: NonNullable<ButtonProps["variant"]>): string {
  switch (variant) {
    case "default":
      return "Primary (Default)";
    case "secondary":
    case "outline":
    case "ghost":
    case "link":
    case "destructive":
      return variant.at(0)!.toUpperCase() + variant.substr(1);
  }
}

function variantToIcon(variant: NonNullable<ButtonProps["variant"]>) {
  switch (variant) {
    case "default":
      return <CheckIcon height={16} />;
    case "destructive":
      return <TrashIcon height={16} />;
    case "link":
      return <LinkIcon height={16} />;
    case "secondary":
    case "outline":
    case "ghost":
      return <ArrowLeftIcon height={16} />;
  }
}

function ButtonVariants({ size }: Pick<ButtonProps, "size">) {
  return Array.from(variants).map((variant) => (
    <div key={variant} className={"pt-2 h-12 flex justify-center items-center"}>
      <Button variant={variant} size={size}>
        {(size === "icon" ? variantToIcon : variantToLabel)(
          variant || "default",
        )}
      </Button>
    </div>
  ));
}

const sizes: Set<ButtonProps["size"]> = new Set([
  "lg",
  "default",
  "sm",
  "icon",
]);

export default function Preview() {
  return (
    <Card className={"w-fit text-center min-w-[900px]"}>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
      </CardHeader>
      <CardContent
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
          "gap-4",
        )}
      >
        {Array.from(sizes).map((size) => (
          <Card key={size}>
            <CardHeader>
              <CardTitle>Size: {size}</CardTitle>
            </CardHeader>
            <CardContent className={"grow grid grid-cols-1 gap-2 divide-y"}>
              <ButtonVariants size={size} />
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}
