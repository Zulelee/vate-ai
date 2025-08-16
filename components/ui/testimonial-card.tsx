import { cn } from "@/lib/utils";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  text,
  href,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl relative",
        "bg-white/5 backdrop-blur-sm",
        "p-6 text-start sm:p-8",
        "hover:bg-white/10",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-all duration-300 hover:scale-105",
        "shadow-lg hover:shadow-xl",
        "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-[#ea6077] before:via-[#d46275] before:to-[#84404b] before:opacity-20 hover:before:opacity-40 before:transition-opacity before:duration-300",
        "after:absolute after:inset-[1px] after:rounded-2xl after:bg-[#0d0d0d]/80 after:backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12 ring-2 ring-[#ea6077]/20">
            <AvatarImage src={author.avatar} alt={author.name} />
          </Avatar>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold leading-none text-white">
              {author.name}
            </h3>
            <p className="text-sm text-gray-300">{author.handle}</p>
          </div>
        </div>
        <p className="text-gray-200 leading-relaxed">{text}</p>
      </div>
    </Card>
  );
}
