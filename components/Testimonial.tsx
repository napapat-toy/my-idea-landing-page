import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const UserCard = () => (
  <div className="max-w-[300px] hover:shadow-full hover:rounded-lg transition">
    <Card className="bg-emerald-100">
      <CardHeader>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <CardTitle>Mr.Smile</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          voluptatibus tenetur error magni voluptatem veniam sapiente maiores
          aliquid ex totam?
        </p>
      </CardContent>
    </Card>
  </div>
);

const Testimonial = () => {
  return (
    <section
      className="h-screen w-full flex items-center justify-center"
      id="testimonial"
    >
      <div className="flex flex-col md:flex-row gap-12 max-w-7xl">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </section>
  );
};

export default Testimonial;
