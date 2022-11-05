function emp(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
    
    this.changesalary=changesalary;
    function changesalary(othersalary)
    {
        this.salary=othersalary;
    }
}
e = new emp(102,"Jack",5000);
console.log(emp.id+" "+emp.name+" "+emp.salary);
e.changesalary(9000);
console.log(emp.id+" "+emp.name+" "+emp.salary);