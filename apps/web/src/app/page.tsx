import { Card } from "@repo/components/card";

export default function Page(): JSX.Element {
  return (
    <div className="flex item-center justify-center">
      <h1 className="text-4xl">Titolo</h1>
      <Card title="Card" href="#">
        Card
      </Card>
    </div>
  );
}
