import {
  Table, TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from "@/components/ui/table";

function Index() {
  // TODO: fetch DNS Record
  /*
  const navigate = useNavigate()
  const search = useLocation().search
  const urlSearchParams = new URLSearchParams(search)

  const fetchDnsRecord = useMemo(() => async () => {
    const domainName = urlSearchParams.get('name')
    const page = urlSearchParams.get('page') || '1'
    const pageSize = urlSearchParams.get('page_size') || '10'

    return 
  }, [urlSearchParams])
  */

  const _Title_ = () => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      DNS Record
    </h1>
  )

  const _Table_ = () => (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Domain Name</TableHead>
          <TableHead>SPF</TableHead>
          <TableHead>DKIM</TableHead>
          <TableHead>DMARC</TableHead>
          <TableHead>Last Checked</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">800</TableCell>
          <TableCell>maxhealthinsurance360.com</TableCell>
          <TableCell className="truncate">v=spf1 include:_spf.google.com ~all</TableCell>
          <TableCell className="truncate">v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs/UJkdmqhn6Nt+rAt3lLoHAgmYa70NSnB9tG4f6dKgeAn4/aPOFI/j/ogwXAw2ACK5oW3y5pyhkxkLPqOVhX29+DXwwyqLfXtlEmjVkHOjYBkQJIjO3iXUlArkEqujYGMWofDpOlSd3VeTMPMMbOA+fRIhIoC7w8yjECeFLkWyErCKAc0iQZjfldLq96faHEI\" \"1pThDdcy13MoaP55Z3tOYtLTvr2cZCc84zGHIGu1ODRElO+zXwsLTiWlLI/lZWf7ppIN9m8rIGwUwl+D+COV1ZLoiW7TBQ1Bqai3IIkoCodYVtkC+mz6Xt19mPVX+8Ieom23c1ztW4DYMg1ZhXLmQIDAQAB\"</TableCell>
          <TableCell className="truncate">v=DMARC1; p=reject</TableCell>
          <TableCell>{`${new Date('2024-11-12T19:19:24.441').toISOString()}`}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )

  return (
    <>
      <_Title_ />
      <_Table_ />
    </>
  )
}

export default Index;