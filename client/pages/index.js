// import buildClient from "../api/build-client";
import Link from "next/link";

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
            <a>View</a>
          </Link>
        </td>
      </tr>
    );
  });

  console.log(tickets);

  return (
    <div>
      <h1>A Ticket App!!!</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
  // return currentUser ? (
  //   <h1>You are signed in</h1>
  // ) : (
  //   <h1>You are not signed in</h1>
  // );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");
  return { tickets: data };
  // console.log("landingPage");
  // const client = buildClient(context);
  // const { data } = await client.get("/api/users/currentuser");
  // return data;
  //return {};
};

export default LandingPage;
