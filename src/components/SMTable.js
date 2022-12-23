import Table from 'react-bootstrap/Table';

function SMTable(props) {
    const { datasource, Cols, onRowClick } = props;
    // console.log(datasource, Cols);

    return (
        <>
            {Cols && Array.isArray(Cols) && (
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>s#</th>
                            {Cols.map((y, i) => (
                                <th key={i}>{y.displayName}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {datasource &&
                            Array.isArray(datasource) &&
                            datasource.length > 0 ? (
                            datasource.map((x, i) => (
                                <tr
                                    onClick={onRowClick(x)}
                                    className={onRowClick} key={i}
                                >
                                    <td>{i + 1}</td>
                                    {Cols.map((y, ind) => (
                                        <td key={ind}>{x[y.key]}</td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <h1>No Data Found</h1>
                        )}
                    </tbody>
                </Table>
            )}
        </>
    );
}

export default SMTable;


// Perform Table

// const quizList =
//     [
//         {
//             id: "456454664465465",
//             question: "jhsgjsgjsghjshsj"
//         },
//         {
//             id: "456454664465465",
//             question: "jhsgjsgjsghjshsj"
//         },
//         {
//             id: "456454664465465",
//             question: "jhsgjsgjsghjshsj"
//         },
//         {
//             id: "456454664465465",
//             question: "jhsgjsgjsghjshsj"
//         }
//     ];

// <SMTable Cols={[
//     {
//         key: "id",
//         displayName: "ID"
//     },
//     {
//         key: "question",
//         displayName: "displayQuestion"
//     }
// ]} datasource={quizList}
//     onRowClick={e => console.log(e)}
// />