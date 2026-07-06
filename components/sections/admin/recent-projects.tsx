import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import Link from "next/link";

export default function RecentProject(){
    return(
        <div className="mt-10 lg:gap-x-5 gap-y-10 grid grid-cols-1 lg:grid-cols-3">
            <Card className="col-span-2">
                <CardHeader>
                    <CardTitle>
                        <p>Recent Projects</p>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardTitle>

                        <Button variant={'ghost'}>
                            <Link href='/admin/projects'>
                            View All →
                            </Link>
                        </Button>
                        
                        <br />
                        <Item>
                            <ItemMedia>
                                icon
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                                <ItemTitle>
                                    Project name
                                </ItemTitle>
                                <ItemDescription className="truncate">
                                    here is the description  description description descriptionvdescriptionv description description description description description description.
                                </ItemDescription>

                            </ItemContent>
                            <ItemActions>
                                <Badge>
                                    published
                                </Badge>
                            </ItemActions>
                        </Item>
                        <Item>
                            <ItemMedia>
                                icon
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                                <ItemTitle>
                                    Project name
                                </ItemTitle>
                                <ItemDescription className="truncate">
                                    here is the description  description description descriptionvdescriptionv description description description description description description.
                                </ItemDescription>

                            </ItemContent>
                            <ItemActions>
                                <Badge>
                                    published
                                </Badge>
                            </ItemActions>
                        </Item>
                        <Item>
                            <ItemMedia>
                                icon
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                                <ItemTitle>
                                    Project name
                                </ItemTitle>
                                <ItemDescription className="truncate">
                                    here is the description  description description descriptionvdescriptionv description description description description description description.
                                </ItemDescription>

                            </ItemContent>
                            <ItemActions>
                                <Badge>
                                    published
                                </Badge>
                            </ItemActions>
                        </Item>
                        <Item>
                            <ItemMedia>
                                icon
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                                <ItemTitle>
                                    Project name
                                </ItemTitle>
                                <ItemDescription className="truncate">
                                    here is the description  description description descriptionvdescriptionv description description description description description description.
                                </ItemDescription>

                            </ItemContent>
                            <ItemActions>
                                <Badge>
                                    published
                                </Badge>
                            </ItemActions>
                        </Item>
                        <Item>
                            <ItemMedia>
                                icon
                            </ItemMedia>
                            <ItemContent className="min-w-0">
                                <ItemTitle>
                                    Project name
                                </ItemTitle>
                                <ItemDescription className="truncate">
                                    here is the description  description description descriptionvdescriptionv description description description description description description.
                                </ItemDescription>

                            </ItemContent>
                            <ItemActions>
                                <Badge variant={'outline'}>
                                    published
                                </Badge>
                            </ItemActions>
                        </Item>
                    </CardTitle>
                </CardContent>
            </Card>
            <Card className="max-h-max">
                <CardHeader>
                    <CardTitle>
                        Quick Actions
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <Link href='' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <p>icon</p>
                            <p>Dachboard</p>
                        </Button>
                    </Link>
                    <Link href='' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <p>icon</p>
                            <p>Dachboard</p>
                        </Button>
                    </Link>
                    <Link href='' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <p>icon</p>
                            <p>Dachboard</p>
                        </Button>
                    </Link>
                    <Link href='' className="">
                        <Button variant={'outline'} className="flex cursor-pointer gap-3 w-full justify-start" >
                            <p>icon</p>
                            <p>Dachboard</p>
                        </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    )
}