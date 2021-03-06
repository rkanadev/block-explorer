package com.xsn.explorer.data.anorm.parsers

import anorm.SqlParser._
import anorm._
import com.xsn.explorer.models.Balance

object BalanceParsers {

  import CommonParsers._

  val parseReceived = get[BigDecimal]("received")
  val parseSpent = get[BigDecimal]("spent")

  val parseBalance = (parseAddress ~ parseReceived ~ parseSpent).map { case address ~ received ~ spent =>
    address.map { Balance(_, received, spent) }
  }
}
