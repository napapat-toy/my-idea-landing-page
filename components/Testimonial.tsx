import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const UserCard = () => (
  <div className="">
    <Card>
      <CardHeader>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <CardTitle>Mr.Smile</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2">
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
      <div className="flex gap-4 max-w-7xl">
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </section>
  );
};

export default Testimonial;
