"use client";

import { usePathname, useSearchParams } from "next/navigation";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@repo/ui/components/ui/pagination";

interface QueryPaginationProps {
	totalPages: number;
	className?: string;
}

export function QueryPagination({
	totalPages,
	className,
}: QueryPaginationProps) {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get("page")) || 1;

	const prevPage = currentPage - 1;
	const nextPage = currentPage + 1;

	const createPageURL = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	return (
		<Pagination className={className}>
			<PaginationContent>
				{prevPage >= 1 ? (
					<PaginationItem>
            <PaginationPrevious href={createPageURL(prevPage)} size={undefined} />
					</PaginationItem>
				) : null}
				{Array(totalPages)
					.fill("")
					.map((_, index) => (
						<PaginationItem
							className='hidden sm:inline-block'
							key={`page-button-${index}`}>
							<PaginationLink
                isActive={index + 1 === currentPage}
                href={createPageURL(index + 1)} size={undefined}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}
				{nextPage <= totalPages ? (
					<PaginationItem>
						<PaginationNext href={createPageURL(nextPage)} size={undefined} />
					</PaginationItem>
				) : null}
			</PaginationContent>
		</Pagination>
	);
}
