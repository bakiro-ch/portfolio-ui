import { Button } from "@/components/ui/button";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiLinkedinLine } from "@remixicon/react";
import { Delete, DeleteIcon, Edit, Link2, Pencil, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

const projects = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  title: "Project Title",
  links: <div className="flex gap-1">
    <Link href="#">
        <Button size={'xs'} variant={'outline'}>
            <RiLinkedinLine   />
        </Button>
    </Link>
    <Link href="#">
        <Button size={'xs'} variant={'outline'}>
            <FiGithub  />
        </Button>
    </Link>
  </div>,
  description:
    "Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description Project Description",
  status: "Published",
  created: "Credit Card",
  actions: <div className="flex ">
    <Button variant={'ghost'}>
        <Link href="#">
            <Pencil />
        </Link>
    </Button>
    <Button className="hover:text-red-600" variant={'ghost'}>
        <Link href="#">
            <Trash  />
        </Link>
    </Button>
  </div>
}));

export default function ProjectsTable() {
  return (
    <div className="max-h-[500px] overflow-auto border rounded-md">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-muted">
          <TableRow>
            {["Title", "Status", "Links", "Actions"].map((head) => (
              <TableHead className="text-center" key={head}>{head}</TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <Item>
                  <ItemMedia>Icon</ItemMedia>

                  <ItemContent className="min-w-0">
                    <ItemHeader>
                      <ItemTitle>{project.title}</ItemTitle>
                    </ItemHeader>

                    <ItemDescription className="lg:max-w-lg max-w-xs truncate">
                      {project.description}
                    </ItemDescription>
                  </ItemContent>
                </Item>
              </TableCell>

              <TableCell>{project.status}</TableCell>
              <TableCell>{project.links}</TableCell>
              <TableCell>{project.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}