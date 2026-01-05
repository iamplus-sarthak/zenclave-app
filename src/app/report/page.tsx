import ReportHeader from "@/components/report/ReportHeader";
import StatsBar from "@/components/report/StatsBar";
import PDFViewer from "@/components/report/PDFViewer";
import Zenbot from "@/components/report/Zenbot";
import { getReport } from "@/lib/actions";

export const dynamic = 'force-dynamic';

interface SearchParams {
    id?: string;
}

// Next.js 15+ requires awaiting searchParams
export default async function ReportPage(props: { searchParams: Promise<SearchParams> }) {
    const searchParams = await props.searchParams;
    const id = searchParams.id || "demo-1";
    const report = await getReport(id);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <ReportHeader pdfUrl={report?.pdfUrl} />
            <div className="flex-shrink-0 pt-2 sm:pt-3 lg:pt-4">
                <StatsBar stats={report?.stats} />
            </div>

            <main className="flex-1 w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
                {report ? (
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 lg:h-[850px] items-stretch">
                        <PDFViewer key={`pdf-${report.id}`} title={report.title} url={report.pdfUrl} />
                        <Zenbot key={`bot-${report.id}`} report={report} />
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-[#64748B]">
                        Report not found. ID: {id}
                    </div>
                )}
            </main>
        </div>
    );
}
